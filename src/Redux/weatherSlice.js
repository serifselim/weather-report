import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cities from '../Data/tr_cities.json';

const { REACT_APP_API_KEY } = process.env;

const initialState = {
  cities: cities,
  weatherData: [],
  isFetch: false,
};

export const fetchWeatherData = createAsyncThunk(
  'fetchWeatherData',
  async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=40.6499&lon=35.8353&appid=${REACT_APP_API_KEY}&exclude=minutely&units=metric`
    );

    const { current, daily } = response.data;

    return {
      current,
      daily,
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.isFetch = false;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.weatherData = action.payload;
      state.isFetch = true;
    });
  },
});

export default weatherSlice.reducer;
