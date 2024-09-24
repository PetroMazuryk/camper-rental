import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAsync, postCampersAsync } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    forms: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearItems: state => {
      state.items = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCampersAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampersAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // const newItems = payload.filter(
        //   camper => !state.items.find(item => item._id === camper._id)
        // );
        // state.items = [...state.items, ...newItems];
        const updatedItems = [...state.items, ...payload].reduce(
          (acc, item) => {
            if (!acc.some(existing => existing._id === item._id)) {
              acc.push(item);
            }
            return acc;
          },
          []
        );
        state.items = updatedItems;
      })
      .addCase(fetchCampersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message || 'Unknown error';
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

export const { setPage, clearItems } = campersSlice.actions;
export const camperReducer = campersSlice.reducer;
