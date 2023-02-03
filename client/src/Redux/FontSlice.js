import { createSlice } from "@reduxjs/toolkit";
const initialState=14
const FontSlice=createSlice({
    name:"FontSlice1",
    initialState,
    reducers:{
        Font3(state,action){
            return action.payload
        }
    }
});


export const {Font3}=FontSlice.actions;
export default FontSlice.reducer