import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    value: 'one',
    isProgrammingTabClicked: true,
    isSqlQueriesTabClicked: false,
    isItemThreeTabClicked: false,
  },
  reducers: {
    changeTab: (state, action) => {
      const newValue = action.payload;
      state.value = newValue;
      if (newValue === 0) {
        state.isProgrammingTabClicked = true;
        state.isSqlQueriesTabClicked = false;
        state.isItemThreeTabClicked = false;
      } else if (newValue === 1) {
        state.isProgrammingTabClicked = false;
        state.isSqlQueriesTabClicked = true;
        state.isItemThreeTabClicked = false;
      } else if (newValue === 2) {
        state.isProgrammingTabClicked = false;
        state.isSqlQueriesTabClicked = false;
        state.isItemThreeTabClicked = true;
      }
    },
  },
});

export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;
