import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersFetch } from '../../services/apiCamper';

export const fetchCampersAsync = createAsyncThunk(
  'campers/fetchCampers',
  async (page, { rejectWithValue }) => {
    try {
      return await campersFetch(page);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
