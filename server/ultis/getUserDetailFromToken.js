const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const getUserDetailFromToken = async (token) => {
  if (!token) {
    return {
      message: "Log Out",
      logout: true,
      success: false,
    };
  }
  const decode = jwt.verify(token, process.env.KEY_JWT);
  const user = await UserModel.findById(decode.id).select("-password");
  return user;
};
module.exports = getUserDetailFromToken;

