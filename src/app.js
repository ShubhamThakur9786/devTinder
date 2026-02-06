const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { Query } = require("mongoose");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.send("user Added Successfully");
  } catch (error) {
    res.status(401).send("Error saving the user: ", error.message);
  }
});

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send("User Data Fetched");
});

connectDB()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(3000, () => {
      console.log("Server is listening on port no. 3000");
    });
  })
  .catch((err) => {
    console.log("Database cann't be connected");
  });
