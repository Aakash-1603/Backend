# 🚀 Connecting MongoDB with Node.js

This guide explains how to connect MongoDB to a Node.js server using Mongoose, and how to perform basic operations.

---

## 📦 Requirements

- Node.js installed
- MongoDB installed locally or use MongoDB Atlas
- `npm init -y`
- Install dependencies:
  ```bash
  npm install express mongoose
  ```

📁 File Structure ----

project-folder/
├── index.js
├── models/
│ └── User.js
├── package.json

🔌 MongoDB Connection Setup (index.js) ----

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3300;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/YourDBName")
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

🧬 Defining a Schema & Model (models/User.js) -----

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
Name: {
type: String,
required: true
},
email: {
type: String,
required: true,
unique: true
}
});

const User = mongoose.model("User", userSchema);
module.exports = User;

🌐 Routes for CRUD (index.js continued) ----

const User = require("./models/User");

// ✅ Create a user
app.post("/api/users", async (req, res) => {
const { Name, email } = req.body;
try {
const existing = await User.findOne({ email });
if (existing) return res.status(409).json({ error: "Email exists" });

    const user = await User.create({ Name, email });
    res.status(201).json({ status: "success", data: user });

} catch (err) {
res.status(400).json({ error: err.message });
}
});

// ✅ Get all users
app.get("/api/users", async (req, res) => {
try {
const users = await User.find();
res.json(users);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

// ✅ Get user by ID
app.get("/api/users/:id", async (req, res) => {
try {
const user = await User.findById(req.params.id);
if (!user) return res.status(404).json({ error: "User not found" });
res.json(user);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

// ✅ Update user
app.patch("/api/users/:id", async (req, res) => {
try {
const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json({ status: "updated", data: updated });
} catch (err) {
res.status(500).json({ error: err.message });
}
});

// ✅ Delete user
app.delete("/api/users/:id", async (req, res) => {
try {
await User.findByIdAndDelete(req.params.id);
res.json({ status: "deleted" });
} catch (err) {
res.status(500).json({ error: err.message });
}
});

🚀 Start the Server ----

app.listen(PORT, () =>
console.log(`Server started at http://localhost:${PORT}`)
);

🛠 Tips & Best Practices -----

Always validate inputs (use libraries like joi or express-validator)

Use .env files to store MongoDB URI securely (with dotenv)

Avoid using GET for data creation

Prefer using async/await over callbacks

Structure project folders (models, controllers, routes)

🧪 Testing with Postman -----

Use POST with Content-Type: application/json

Body (raw JSON):

{
"Name": "Aakash",
"email": "aakash@example.com"
}

🧼 Handling Duplicate Key Errors ----

Mongoose will throw an error if a unique field (like email) is duplicated:

{
"error": "E11000 duplicate key error collection: users"
}

✅ Done!
You now have a fully functional backend connected to MongoDB.
