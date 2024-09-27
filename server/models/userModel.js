const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordCode: {
      type: String,
    },
    expirationTime: {
      type: Date,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    profile: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
