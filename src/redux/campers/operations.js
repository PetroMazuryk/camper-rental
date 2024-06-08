import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersFetch } from '../../services/apiCamper';

export const fetchCampersAsync = createAsyncThunk(
  'items/fetchCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await campersFetch();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
