
# 📦 Multer - Node.js Middleware for Handling File Uploads

## 📘 Overview

**Multer** is a middleware for handling `multipart/form-data`, which is primarily used for uploading files in Node.js applications. It is written on top of the `busboy` module and works with Express.

---

## 📦 Installation

```bash
npm install multer
```

---

## 📌 Basic Usage

```js
const express = require('express');
const multer = require('multer');
const app = express();

// Define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

// Init upload
const upload = multer({ storage: storage });

// Route
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});
```

---

## 📁 Upload Types

| Method                           | Description                                |
|----------------------------------|--------------------------------------------|
| `upload.single(fieldname)`       | Upload **single file**                     |
| `upload.array(fieldname, maxCount)` | Upload **multiple files** (same field)  |
| `upload.fields([{ name: 'avatar' }, { name: 'doc' }])` | Upload **different files** (different fields) |
| `upload.none()`                  | Accept only text fields (no files)         |

---

## 🛡 File Filter (Validate Files)

```js
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('Only .png and .jpeg format allowed!'), false);
    }
  }
});
```

---

## 🚫 Limits (File Size, Count, etc.)

```js
const upload = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024 // 1MB
  }
});
```

---

## 🔍 Access Uploaded File Info

```js
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // Info like originalname, size, etc.
  console.log(req.body); // Other form fields
});
```

---

## 📂 Save in Memory (Buffer instead of disk)

```js
const storage = multer.memoryStorage();
const upload = multer({ storage });
```

---

## 📦 File Object Example (`req.file`)

```json
{
  "fieldname": "file",
  "originalname": "photo.jpg",
  "encoding": "7bit",
  "mimetype": "image/jpeg",
  "destination": "uploads/",
  "filename": "16913459023-photo.jpg",
  "path": "uploads/16913459023-photo.jpg",
  "size": 52488
}
```

---

## ⚠ Common Errors

| Error                    | Reason                                 |
|--------------------------|----------------------------------------|
| `LIMIT_FILE_SIZE`        | File too large                         |
| `LIMIT_FILE_COUNT`       | Too many files uploaded                |
| `LIMIT_UNEXPECTED_FILE`  | Wrong field name or extra file         |
| Custom error             | From `fileFilter` callback             |

---

## 🧹 Clean Up

Don't forget to:
- Create `uploads/` directory manually if not using middleware to auto-create.
- Use `fs.unlink()` to delete files after processing if needed.

---

## ✅ Example Folder Structure

```
project/
│
├── server.js
├── uploads/
└── package.json
```

---

## 🔗 References

- [Multer GitHub](https://github.com/expressjs/multer)
- [Express Docs](https://expressjs.com/en/resources/middleware/multer.html)
