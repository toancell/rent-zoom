const UserModel = require("../models/userModel");
const hashPassword = require("../ultis/hashPassword");
const jwt = require("jsonwebtoken");
const generateRandomPassword = require("../ultis/generatePassword");
const sendMail = require("../ultis/sendMail");
const bcrypt = require("bcrypt");
const getUserDetailFromToken = require("../ultis/getUserDetailFromToken");
const signUpController = async (req, res) => {
  try {
    const { email, phone, name, password,profile } = req.body;
    if (!phone && !password && !name && !email && !profile) {
      return res.status(400).json({ message: "Missing input" });
    }

    const checkEmail = await UserModel.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ message: "User is exist" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await UserModel.create({
      email,
      password: hashedPassword,
      phone,
      name,
      profile
    });

    return res.status(200).json({
      message: "Create successfull",

      user,
    });
  } catch (err) {
    console.log(err);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: "missing input" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User is not exist" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Password is correct" });
    }
    const newUser = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(newUser, process.env.KEY_JWT, {
      expiresIn: "1d",
    });
    return res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({
        message: "Login successfully",
        token,
        user,
      });
  } catch (err) {
    console.log(err);
  }
};

const RequestForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }
    const resetCode = await generateRandomPassword(4);
    const token = await jwt.sign({ email, resetCode }, process.env.KEY_JWT, {
      expiresIn: "15m",
    });
    console.log(resetCode);
    const html = `<p>Mã số xác nhận thay đổi mật khẩu là : ${resetCode}. Mã số chỉ có hiệu lực trong 15 phút. Xác thực lấy lại mật khẩu dưới link sau : <Link> ${
      process.env.FRONTEND_URL + "/reset-password/" + token
    }<Link/></p>`;
    await sendMail(email, html);

    return res.status(200).json({
      message: "Sent mail",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Something went wrong",
      err,
    });
  }
};
const getDetailUserInf = async(req,res) =>{
  try{
    const token = req.cookies.token || ""
    const user  = await getUserDetailFromToken(token)
    return res.status(200).json({
      message: "success",
      data: user,
      success: true
    })
  }catch(err){
    return res.status(500).json({
      message: err.message || err,
      err: true,
    })
  }
}
const ForgetPassword = async (req, res) => {
  try {
    const { token, resetcode, newPassword } = req.body;
    jwt.verify(token, process.env.KEY_JWT, async (err, decoded) => {
      if (err)
        return res.status(400).json({ error: "Invalid or expired token" });
      const { email, resetCode: storedCode } = decoded;
      console.log(resetcode);
      if (storedCode !== resetcode) {
        return res.status(400).json({ error: "Invalid code" });
      }

      const hashednewPassword = await hashPassword(newPassword);
      await UserModel.findOneAndUpdate(
        { email },
        {
          password: hashednewPassword,
        }
      );
      return res.status(200).json({
        message: "Password changed successfully",
        success: true,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
const LogOut= async(req,res) => {
  try{
    
    return res.cookie("token", "", {secure: true, httpOnly: true}).json({
      message:"Log out successfully",
      success: true,
    })
  }catch(err){
    return res.status(400).json({message: err.message});
  }
}
const UpdateProfile =async (req, res) => {
  try{
    const {userID}= req.params
    console.log(userID)
    const {profile,name,phone}= req.body
    const updateData = await UserModel.findByIdAndUpdate(userID,{profile,name,phone},{new: true})
    return res.status(200).json({
      success: true,
      message: "Update successfully",
      updateData
    })
  }catch(err){ 
    return res.status(400).json({message: err.message});

  }
}
module.exports = {
  signUpController,
  loginController,
  RequestForgetPassword,
  ForgetPassword,
  getDetailUserInf,
  LogOut,
  UpdateProfile
};
