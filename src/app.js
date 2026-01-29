const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hello from test");
});
app.use("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("Server is listening on port no. 3000");
});
