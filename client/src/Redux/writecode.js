import { createSlice } from "@reduxjs/toolkit";
const writecode=createSlice({
    name:"writecode1",
    initialState:{},
    reducers:{
        writecode_run(state,action){
            return action.payload;
        }
    }
});
export const {writecode_run}= writecode.actions
export default writecode.reducer