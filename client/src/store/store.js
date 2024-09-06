import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"

const store = configureStore({
  reducer:{
    user: authReducer
  }
})

export default store