import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.data = action.payload;
    },

    updateCodeDetals: (state, action) => {
      state.detalsElem =  action.payload;
    }

  },
});

export const { updateLoadState, updateData, updateCodeDetals } = weatherSlice.actions;

export default weatherSlice.reducer;
