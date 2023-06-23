import { createSlice } from '@reduxjs/toolkit';

let dogList = require("../dog.json")

//displaying the number of elements 6/4/1
let elem, dogListDisp
let winWidth = window.innerWidth;
  if (winWidth < 600) {elem = 1}
    else if (winWidth < 1000) {elem = 4}
      else elem = 6;
  if ( !Number.isInteger(dogList.length/elem)){
    let amountElem = elem - (dogList.length % elem)
    dogListDisp =  dogList.concat(dogList.slice(0,amountElem))
  }

//Breed list
let breedsList = []
breedsList.push(dogList.map(elem => [elem.name, elem.code,elem.friendliness]))


const initialState={
  dogList: dogListDisp,
  elementСount: elem,
  changelist : 0,
  detalsElem: 0,
  breedsList: breedsList[0],
  filterBreedsList: breedsList[0]

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
    },
    filterBreedsList: (state,action) =>{
      state.filterBreedsList = state.breedsList.filter(as)
          function as (w){
            return w[0].includes(action.payload)
          }

      // state.filterBreedsList = action.payload
    }
  },
});

export const { updateСhangelistState, updateCodeDetals,filterBreedsList } = dogSlice.actions;

export default dogSlice.reducer;
