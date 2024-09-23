const express = require('express')
const router = express.Router()
const {signUpController,RequestForgetPassword,loginController,LogOut, ForgetPassword, getDetailUserInf} = require("../controller/authController")
const {createCategory, getAllCategory} = require("../controller/categoryController")

const {createRoom, getAllRoom,getNewPost,deleteRoom,updateRoom,getRoomPostByUser} = require("../controller/roomController")

router.post("/auth/signup", signUpController)
router.post("/auth/forget-password", ForgetPassword)
router.post("/auth/request-forget-password", RequestForgetPassword)
router.post("/auth/login", loginController)
router.get("/auth/detail-user", getDetailUserInf)
router.post("/auth/logout",LogOut)

router.post("/category/create-category", createCategory)
router.get("/category/get-all-category", getAllCategory )


router.post("/room/create-room", createRoom)
router.post("/room/all-room",getAllRoom)
router.delete("/room/delete-room/:postId",deleteRoom)
router.put("/room/update-room/:postId",updateRoom)
router.post("/room/get-room-posted-by-user", getRoomPostByUser)

router.get("/room/new-post",getNewPost)
module.exports= router
