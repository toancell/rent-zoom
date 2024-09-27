import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import categoryReducer from "../slice/categorySlice"
import postReducer from '../slice/postSlice'
import searchReducer from '../slice/searchSlice'

const store = configureStore({
  reducer:{
    user: authReducer,
    category: categoryReducer,
    post: postReducer,
    search: searchReducer,
    
  }
})

export default store