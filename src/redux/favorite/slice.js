import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addCamperFavorite(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },
    deleteCamperFavorite(state, { payload }) {
      state.favorite = state.favorite.filter(
        product => product._id !== payload
      );
    },
  },
});

export const { addCamperFavorite, deleteCamperFavorite } =
  favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
