const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3300;

// ✅ Middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Mongoose User Schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  }
});

// ✅ Mongoose User Model
const User = mongoose.model("User", userSchema);

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Akdon")
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ✅ Custom Middleware
app.use((req, res, next) => {
  console.log("Middleware 1 is running");
  req.myNum = "8709812345";
  next();
});

app.use((req, res, next) => {
  req.acNum = "987654";
  next();
});

// ✅ GET all users
app.get("/api/users", async (req, res) => {
  res.setHeader("X-myAccount", "987654");
  console.log(req.headers);

  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch users", details: err.message });
  }
});

// ✅ POST a new user
app.post("/api/users", async (req, res) => {
  const { Name, email } = req.body;
  console.log("Received body:", req.body); // Debugging log

  if (!Name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const newUser = await User.create({ Name, email });
    return res.status(201).json({ status: "success", data: newUser });
  } catch (err) {
    return res.status(400).json({ error: "Failed to create user", details: err.message });
  }
});

// ✅ GET, PATCH, DELETE by ID
app.route("/api/users/:id")
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: "Error fetching user", details: err.message });
    }
  })
  .patch(async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.status(200).json({ status: "updated", data: updatedUser });
    } catch (err) {
      return res.status(500).json({ error: "Error updating user", details: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ status: "deleted" });
    } catch (err) {
      return res.status(500).json({ error: "Error deleting user", details: err.message });
    }
  });

// ✅ Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server started on http://localhost:${PORT}`)
);
