import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            phone: "",
            _id: "",
            email: "",
        },
        token: "",
        isLogin: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.user.name = action.payload.name;
            state.user.phone = action.payload.phone;
            state.user._id = action.payload._id;
            state.user.email = action.payload.email;  
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setLogOut: (state, action) => {
            state.user.name = "";
            state.user.phone="";
            state.user._id="";
            state.user.email = "";
            state.token = ""
        },
        setCheckLogin: (state, action) => {
            state.isLogin = action.payload
        }
    },
});

export const { setLogin,setToken,setLogOut,setCheckLogin } = authSlice.actions;
const authReducer =  authSlice.reducer;
export default authReducer;