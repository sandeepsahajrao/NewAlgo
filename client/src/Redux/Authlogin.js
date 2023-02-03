import { createSlice } from "@reduxjs/toolkit";
const AuthloginSlice = createSlice({
    name: 'authlogin',
    initialState: {
        name:'',
        Boolean1:false
    },
    reducers: {
        toggleloginame(state, action) {
            return action.payload;
        },
    }
});

export const { toggleloginame } = AuthloginSlice.actions
export default AuthloginSlice.reducer;

