import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAsync, postCampersAsync } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    forms: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
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
      })

      .addCase(postCampersAsync.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postCampersAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.forms = payload;
      })
      .addCase(postCampersAsync.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const camperReducer = campersSlice.reducer;
