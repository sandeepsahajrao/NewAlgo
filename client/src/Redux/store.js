import { configureStore } from "@reduxjs/toolkit";

import Selectlang1 from './Workspaceslice';
import FontSlice from "./FontSlice";
import CodeSlice from "./CodeSlice";
import AuthloginSlice from './Authlogin'

const store=configureStore({
    reducer:{
        Selectlang1:Selectlang1,
        FontSlice:FontSlice,
        CodeSlice:CodeSlice,
        AuthloginSlice:AuthloginSlice
    

    }
})

export default store;