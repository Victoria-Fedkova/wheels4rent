import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648efb9575a96b6644448bbb.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSomeCars = createAsyncThunk(
  'cars/fetchSomeCars',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: { limit: 8, page: data },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCar = createAsyncThunk(
  'cars/updateCar',
  async (payload, thunkAPI) => {
    try {
      const { car, popular } = payload;
      const res = await axios.put(`/adverts/${car.id}`, { popular });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
