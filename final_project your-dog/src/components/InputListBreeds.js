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

let df
  const consol = (a) =>{
    df = a.target.value
    console.log(a.target.value)
  }




  let elemOptionItem = BreedsListFilt.map( elem => 
    <OptionItem key = {elem.code}
      nameBreed ={elem.name}
      value ={elem.code}/>)

  return(
    <>
    <input type="text" onChange={ilterBreedsList} value={df}  />
    <select size="10"  onChange={consol}>
      {elemOptionItem}
    </select>

    </>
  )
}

