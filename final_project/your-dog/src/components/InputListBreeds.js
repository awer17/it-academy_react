import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterBreedsList } from "../redux/dogSlice";

import {OptionItem} from './OptionItem'


export const InputListBreeds = () =>{

  let breedsList = useSelector( state => state.dog.breedsList); 
  let BreedsListFilt = useSelector( state => state.dog.filterBreedsList); 

  const dispatch = useDispatch();
  function ilterBreedsList(eo) {
    dispatch( filterBreedsList(eo.target.value))
  };

  const consol = (a) =>{
    console.log(a.target.value,breedsList)
  }



  let elemOptionItem = BreedsListFilt.map( elem => 
    <OptionItem key = {elem[1]}
      nameBreed ={elem[0]}
      value ={elem[1]}/>)

  return(
    <>
    <input type="text" onChange={ilterBreedsList} />
    <select size="10"  onChange={consol}>
      {elemOptionItem}
    </select>

    </>
  )
}

