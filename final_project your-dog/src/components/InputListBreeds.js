import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterBreedsList } from "../redux/dogSlice";
import './InputListBreeds.css'
import {OptionItem} from './OptionItem'
import {InputFriendliness}  from'./InputFriendliness'



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
  }




  let elemOptionItem = BreedsListFilt.map( elem => 
    <OptionItem key = {elem.code}
      nameBreed ={elem.name}
      value ={elem.code}/>)

  return(
    <div className="wrap-input">
      <details>
          <summary>Filter</summary>
        <input className="_text" type="text" onChange={ilterBreedsList} value={df}  />
        <select className="_sellect" size="10"  onChange={consol}>
          {elemOptionItem}
        </select>
        <InputFriendliness/>
      </details>
      <p className="title-filter">Filter</p>
      <div className="input-wrap">
        <input className="_text" type="text" onChange={ilterBreedsList} value={df}  />
        <select className="_sellect" size="10"  onChange={consol}>
          {elemOptionItem}
        </select>
      <InputFriendliness/>
      </div>
    </div>
  )
}

