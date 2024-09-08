
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState:{
        category:{}
    },
    reducers:{
        setCategory: (state,action) =>{
            state.category = action.payload
        }
    },
})

export const {setCategory} = categorySlice.actions
const categoryReducer = categorySlice.reducer
export default categoryReducer