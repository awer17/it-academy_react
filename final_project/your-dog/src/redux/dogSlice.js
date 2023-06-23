import { createSlice } from '@reduxjs/toolkit';

let dogList = require("../dog.json")

//displaying the number of elements 6/4/1
let elem, dogListDisp
let winWidth = window.innerWidth;
  if (winWidth < 600) {elem = 1}
    else if (winWidth < 1080) {elem = 4}
      else elem = 6;
  if ( !Number.isInteger(dogList.length/elem)){
    let amountElem = elem - (dogList.length % elem)
    dogListDisp =  dogList.concat(dogList.slice(0,amountElem))
  }

const initialState={
  dogList: dogListDisp,
  elementСount: elem,
  changelist : 0,
  detalsElem: [100,"https://images.dog.ceo/breeds/affenpinscher/n02110627_3972.jpg"],
  breedsList: dogList,
  filterBreedsList: dogList,
  listCompare: []

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
            return w.name.includes(action.payload)
      }
    },
    addCompare:(state, action) => {
      if (state.listCompare.length < 3){
        state.listCompare.push(dogList.filter(item => item.code == action.payload)[0]);}
      else     alert("Only 3 breeds can be compared at most")
      

    }
  },
});

export const { updateСhangelistState, updateCodeDetals,filterBreedsList, addCompare } = dogSlice.actions;

export default dogSlice.reducer;
