import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  counter: 0,
}

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {},
});

export default constructorSlice.reducer;

