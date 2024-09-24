import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
  },
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocationFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
