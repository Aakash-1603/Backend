const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./connection");
const urlRoutes = require("./routes/url");

const app = express();

const port = 5000;

app.use(express.json());

app.use("/url", urlRoutes);

connectDB("mongodb://127.0.0.1:27017/urlshortener").then(()=>{
    console.log("Mongodb connected successfully");
}).catch((error)=>{
    console.error("Error connecting to MongoDB:", error);
})

app.listen(port, () => {
  console.log(`server is running successfully on PORT: ${port}`);
});
