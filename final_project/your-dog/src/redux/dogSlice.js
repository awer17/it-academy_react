import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dogList: require("../dog.json"),
}

export const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {

    updateDogListState: (state,action) => {
      state.dogList = [];
    },


  },
});

export const { updateDogListState } = dogSlice.actions;

export default dogSlice.reducer;
