// we use // EJS to render dynamic HTML pages on the server side.
//   // EJS allows you to embed JavaScript code into HTML, making it easy to create
//   // EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML with plain JavaScript. It’s most commonly used with Node.js and Express.js to render dynamic HTML pages on the server side.
// })

const express = require("express");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url");
const newRoute = require("./routes/newRoute");
const userRoute = require("./routes/user");
const URL = require("./models/url");
const path = require("path");

const cookiePrser=require("cookie-parser");

const {restrictToLoggedinUserOnly} =require("./middleware/auth");

const app = express();
const PORT = 5000;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiePrser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/", newRoute);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

// This code sets up a basic Express server that connects to a MongoDB database,
// uses EJS as the templating engine, and defines routes for URL shortening and redirection
