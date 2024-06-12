import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersFetch } from '../../services/apiCamper';
import { campersPost } from '../../services/apiCamper';

import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

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

export const postCampersAsync = createAsyncThunk(
  'adverts/sendForm',
  async (form, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post('/connect', { form });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
