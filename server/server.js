const express = require('express')
const app = express()
const cors= require('cors')
const dotenv= require('dotenv')
const router = require('./router/index.js')
dotenv.config()
const port = process.env.PORT || 8080
const connectDB= require("./config/connectDB.js")
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    method:["POST", "GET","PUT", "DELETE"],
    credentials: true
}))
app.use('/api', router)
connectDB()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})