const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// 2nd way to handle file upload--->

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);

    // here we use Date.now() to make the file name unique
  },
});
const upload = multer({ storage });

// 1st way to handle file upload--->

// const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("Homepage");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
