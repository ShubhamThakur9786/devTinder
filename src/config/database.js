const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NamasteNodeJs:namastenodejs@cluster0.thul58s.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

//this is the bad way to do this
// connectDB()
//   .then(() => {
//     console.log("Database Connected Successfully");
//   })
//   .catch((err) => {
//     console.log("Database cann't be connected");
//   });

// /schema of our database
// // models
// // user.js

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
//   gender: {
//     type: String,
//   },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
