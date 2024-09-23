import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        province: "",
        monney:{},
        acreage:{}
    },
    reducers:{
        setSearch:( state,action) =>{
            
            return{
                ...state,
                ...action.payload
            }
        }
    }
})
export const { setSearch} = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;