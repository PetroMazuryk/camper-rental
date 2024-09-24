import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersFetch, campersPost } from '../../services/apiCamper';

export const fetchCampersAsync = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page, locationFilter }, { rejectWithValue }) => {
    try {
      return await campersFetch(page, locationFilter);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postCampersAsync = createAsyncThunk(
  'adverts/sendForm',
  async (form, { rejectWithValue }) => {
    try {
      return await campersPost(form);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
