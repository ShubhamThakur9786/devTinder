const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  try {
    const userObj = {
      firstName: "Shubham",
      lastName: "Thakur",
      email: "shubham@thakur.com",
      password: "shubham123",
    };

    const user = new User();

    await user.save();
    res.send("user Added Successfully");
  } catch (error) {
    res.status(401).send("Error saving the user: ", error.message);
  }
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
