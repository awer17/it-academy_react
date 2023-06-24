import { createSlice } from '@reduxjs/toolkit';

let dogList = require("../dog.json")

//displaying the number of elements 6/4/1
let elemnt, dogListDisp
let winWidth = window.innerWidth;
  // elemnt = 6;
  
  if (600 > winWidth ) {elemnt = 2}
    else if (winWidth < 1180) {elemnt = 4}
      else elemnt = 6;

      
  if ( !Number.isInteger(dogList.length / elemnt)){
    let amountElem = elemnt - (dogList.length % elemnt)
    dogListDisp =  dogList.concat(dogList.slice(0, amountElem))
  }

const initialState={
  dogList: dogListDisp,
  elementСount: elemnt,
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
      if( !(state.listCompare.filter(item => item.code == action.payload)[0])
        )
        {if (state.listCompare.length < 3){
            state.listCompare.push(dogList.filter(item => item.code == action.payload)[0]);}
          else     alert("Only 3 breeds can be compared at most")}
      else     alert("Breed already added for comparison")
    },
    removeCompare:(state, action) => {
      state.listCompare = state.listCompare.filter(item => item.code !== action.payload)
    }
  },
});

export const { updateСhangelistState, updateCodeDetals,filterBreedsList, addCompare,removeCompare } = dogSlice.actions;

export default dogSlice.reducer;
