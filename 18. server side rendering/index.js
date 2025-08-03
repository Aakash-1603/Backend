const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./connection");
const urlRoutes = require("./routes/url");
const path = require("path");
const newRoutes = require("./routes/newRoutes");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoutes);
 
// app.get("/testing",async(req,res)=>{
//   return res.end(`<h1>Server is running successfully for testing </h1>`);

//   // we use // EJS to render dynamic HTML pages on the server side.
//   // EJS allows you to embed JavaScript code into HTML, making it easy to create
//   // EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML with plain JavaScript. It’s most commonly used with Node.js and Express.js to render dynamic HTML pages on the server side.
// })

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", newRoutes);

// app.get("/testing",async(req,res)=>{
//   const allUrls=await URL.find({});
//   return res.end("frontend",{
//     urls: allUrls
//   });
// })

connectDB("mongodb://127.0.0.1:27017/urlshortener")
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`server is running successfully on PORT: ${port}`);
});
