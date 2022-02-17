import { createSlice } from '@reduxjs/toolkit';
import cities from '../Data/tr_cities.json';

const initialState = {
  cities: cities,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
