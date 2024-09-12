const express = require('express')
const router = express.Router()
const {signUpController,RequestForgetPassword,loginController,LogOut, ForgetPassword, getDetailUserInf} = require("../controller/authController")
const {createCategory, getAllCategory} = require("../controller/categoryController")
router.post("/auth/signup", signUpController)
router.post("/auth/forget-password", ForgetPassword)
router.post("/auth/request-forget-password", RequestForgetPassword)
router.post("/auth/login", loginController)
router.get("/auth/detail-user", getDetailUserInf)
router.post("/auth/logout",LogOut)

router.post("/category/create-category", createCategory)
router.get("/category/get-all-category", getAllCategory )
module.exports= router