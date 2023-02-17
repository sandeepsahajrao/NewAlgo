import { createSlice } from "@reduxjs/toolkit";
const initialState=''
const CodebyId=createSlice({
    name:"CodebyId1",
    initialState,
    reducers: {
        CodeID(state, action) {
          if (action.payload === undefined) {
            return state;
          }
          return action.payload;
        },
      },
});


export const {CodeID}=CodebyId.actions;
export default CodebyId.reducer