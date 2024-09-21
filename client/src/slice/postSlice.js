import { createSlice } from "@reduxjs/toolkit";


const postSlice= createSlice({
    name: "post",
    initialState:{
        province: "",
        district: "",
        ward: "",
        street: "",
        category: "",
        title: "",
        description: "",
        monney:"",
        acreage:"",
        userCreated: "",
        phone: "",
        imgList: []
    },
    reducers:{
        setPost : (state, action) =>{
            state.province= action.payload.province;
            state.district= action.payload.district;
            state.ward = action.payload.ward;
            state.street = action.payload.street;
            state.category = action.payload.category;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.monney = action.payload.monney;
            state.acreage= action.payload.acreage;
            state.userCreated = action.payload.userCreated;
            state.phone = action.payload.phone;
            state.imgList = action.payload.imgList
        }
    } 


})
export const {setPost } = postSlice.actions
const postReducer= postSlice.reducer
export default postReducer