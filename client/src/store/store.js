import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import categoryReducer from "../slice/categorySlice"
const store = configureStore({
  reducer:{
    user: authReducer,
    category: categoryReducer,
  }
})

export default store