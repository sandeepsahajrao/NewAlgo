import { createSlice } from "@reduxjs/toolkit";
const initialState="terminal"
const ThemFontSlice=createSlice({
    name:"ThemFontSlice1",
    initialState,
    reducers:{
        ThemFont3(state,action){
            return action.payload
        }
    }
});


export const {ThemFont3}=ThemFontSlice.actions;
export default ThemFontSlice.reducer
// export default CodeSlice.reducer