import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648efb9575a96b6644448bbb.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
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
      const { id, updatedCar } = payload;
      const res = await axios.patch(`/cars/${id}`, updatedCar);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
