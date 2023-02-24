import { createSlice } from '@reduxjs/toolkit';

export const attemptedQuestionsSlice = createSlice({
  name: 'attemptedQuestions',
  initialState: [9],
  reducers: {
    addQuestion: (state, action) => {
      // Add the ID of the attempted question to the state array
      return state.push(action.payload);
    },
  },
});

// Export the addQuestion action creator
export const { addQuestion } = attemptedQuestionsSlice.actions;

// Export the reducer function for this slice
export default attemptedQuestionsSlice.reducer;
