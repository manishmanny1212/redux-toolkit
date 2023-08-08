// src/features/dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    options: [],
    selectedOption: null,
  },
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setOptions, setSelectedOption } = dropdownSlice.actions;
export default dropdownSlice.reducer;
