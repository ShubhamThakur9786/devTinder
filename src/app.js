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

app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.find({ email: userEmail });
    res.send(user);
  } catch (error) {
    res.status(400).send("Something Went Wrong: " + error.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    res.status(400).send("Something Went Wrong: " + error.message);
  }
});

app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully");
  } catch (error) {
    res.status(400).send("Something went wrong: ", error.message);
  }
});

app.patch("/edit", async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body;
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "before",
    });
    console.log(user);
    res.send("User Updated Successfully");
  } catch (error) {
    res.status(400).send("Something went wrong: ", error.message);
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
