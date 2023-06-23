import { createSlice } from '@reduxjs/toolkit';

//displaying the number of elements 6/4/1
let elem
let winWidth = window.innerWidth;
  if (winWidth < 600) {elem = 1}
    else if (winWidth < 1000) {elem = 4}
      else elem = 6;



let dogList = require("../dog.json")
console.log(dogList.length );
  if ( !Number.isInteger(dogList.length/elem)){
    let amountElem = elem - (dogList.length % elem)
    dogList =  dogList.concat(dogList.slice(0,amountElem))
  }
console.log(dogList.length );
const initialState={
  dogList: dogList,
  elementСount: elem,
  changelist : 0,
  detalsElem: 0
}



export const dogSlice = createSlice({
  
  name: 'dog',
  initialState,
  reducers: {
    updateСhangelistState: (state,action) => {
      state.changelist += action.payload
    },
    updateCodeDetals: (state, action) => {
      state.detalsElem =  action.payload;
    }
  },
});

export const { updateСhangelistState, updateCodeDetals } = dogSlice.actions;

export default dogSlice.reducer;
