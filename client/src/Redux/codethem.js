import { createSlice } from "@reduxjs/toolkit";
const CodeTheme=createSlice({
    name:'codeTheme',
    initialState:'Monokai',
    reducers:{
        codethem(state,action){
            return action.payload;
        }
    }

});

export const {codethem}=CodeTheme.actions;
export default CodeTheme.reducer