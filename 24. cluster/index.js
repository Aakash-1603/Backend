const express = require("express");

const app = express();
const port = 3500;

app.get("/", (req, res) => {
  return res.json({
    message: `Hello ${process.pid} from the main server process`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
