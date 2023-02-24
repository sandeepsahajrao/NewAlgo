import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  language: 'python',
  additionalData: 'python',
};

const selectLanguageSlice = createSlice({
  name: "selectLanguage",
  initialState,
  reducers: {
    lang1(state, action) {
      return {
        ...state,
        lang: action.payload.language,
        additionalData: action.payload.additionalData,
      };
    },
  },
});

export const { lang1 } = selectLanguageSlice.actions;
export default selectLanguageSlice.reducer;
