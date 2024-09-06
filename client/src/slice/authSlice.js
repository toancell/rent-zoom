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
        }
    },
});

export const { setLogin,setToken } = authSlice.actions;
const authReducer =  authSlice.reducer;
export default authReducer;