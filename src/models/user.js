const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 50,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(val) {
        if (!validator.isEmail(val)) {
          throw new Error("Email is not valid");
        }
      },
    },
    password: {
      type: String,
      validate(val) {
        if (!validator.isStrongPassword(val)) {
          throw new Error("Please enter the strong password: " + val);
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender is not valid: " + value);
        }
      },
    },
    about: {
      type: String,
      default: "This is about section",
    },
    photoUrl: {
      type: String,
      validate(val) {
        if (!validator.isURL(val)) {
          throw new Error("Photo url is not valid");
        }
      },
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
