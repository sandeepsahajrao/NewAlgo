import { createSlice } from "@reduxjs/toolkit";
const CodeSlice = createSlice({
    name: 'code1',
    initialState: '',
    reducer: {
        codeAdd(state, action) {
            return action.payload;
        }
    }
})

export const { codeAdd } = CodeSlice.actions;
export default CodeSlice.reducer