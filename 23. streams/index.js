const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const status = require("express-status-monitor");
const zlib = require("zlib");

app.use(status());
app.get("/", (req, res) => {
  const stream = fs.createReadStream("./file.text", "utf-8");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => res.end());
});

fs.createReadStream("./file.text").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./file.zip"))
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
