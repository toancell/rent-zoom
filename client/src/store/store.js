import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import categoryReducer from "../slice/categorySlice"
import postReducer from '../slice/postSlice'
const store = configureStore({
  reducer:{
    user: authReducer,
    category: categoryReducer,
    post: postReducer
  }
})

export default store