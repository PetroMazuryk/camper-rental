import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAsync } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCampersAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampersAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const newItems = payload.filter(
          camper => !state.items.find(item => item._id === camper._id)
        );
        state.items = [...state.items, ...newItems];
      })
      .addCase(fetchCampersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});

export const camperReducer = campersSlice.reducer;
