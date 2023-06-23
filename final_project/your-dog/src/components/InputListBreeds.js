import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {OptionItem} from './OptionItem'

export const InputListBreeds = () =>{

  const breedsList = useSelector( state => state.dog.breedsList); 

  const consol = (a) =>{
    console.log(a.target.value,breedsList)
  }

  let elemOptionItem = breedsList.map( elem => 
    <OptionItem key = {elem[1]}
      nameBreed ={elem[0]}
      value ={elem[1]}/>)

  return(
    <select size="10"  onChange={consol}>
      {elemOptionItem}
    </select>
  )
}

