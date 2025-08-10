const cluster = require("cluster");
const os = require("os");
const express = require("express");
const numofCpu = os.cpus().length;
console.log(`Number of CPU cores: ${numofCpu}`);

if (cluster.isPrimary) {
  for (let i = 0; i < numofCpu; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = 3500;

  app.get("/", (req, res) => {
    return res.json({ message: "Hello from worker process" });
  });

  app.listen(port, () => {
    console.log(`Worker process ${process.pid} is running on port ${port}`);
  });
}
