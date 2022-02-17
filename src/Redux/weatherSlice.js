import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  say: 'hello',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
