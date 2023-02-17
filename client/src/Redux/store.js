import { configureStore } from "@reduxjs/toolkit";

import Selectlang1 from './Workspaceslice';
import FontSlice from "./FontSlice";
import CodeSlice from "./CodeSlice";
import AuthloginSlice from './Authlogin'
import writecode from "./writecode";
import  ThemFont3  from "./codethem";
import codebyid from "./codebyid";
const store=configureStore({
    reducer: {
        Selectlang1: Selectlang1,
        FontSlice: FontSlice,
        CodeSlice: CodeSlice,
        AuthloginSlice: AuthloginSlice,
        ThemFont3: ThemFont3,
        writecode: writecode,
        codebyid:codebyid

    }
})

export default store;