import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { removeCompare } from "../redux/dogSlice";
import './ItemCompare.css'


export const ItemCompare = (props) => {

  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      fetch(`https://dog.ceo/api/breed/${props.elem.nameDog}/images/random `)
        .then( response => {
          return response.json();
        } )
        .then ( info => {
          setAge(info.message)
        } )
    },
    []
  );

  function aremoveCompareBtn() {
    dispatch( removeCompare(props.elem.code))
  };
  return(
    <div className="wrap-compare-item">
      <div className="wrap-img">
          <img src={age}  alt={props.elem.name} />
          <p className="title">{props.elem.name}</p>
          <button onClick={aremoveCompareBtn}>remove from comparison</button>
      </div>
      <div className="wrap-desc">
        <p >{props.elem.short_description}</p>
        <p >{props.elem.description}</p>
        <p >size at the withers: {props.elem.size_at_the_withers}</p>
        <p >friendliness: {props.elem.friendliness} out of 10</p>
      </div>
    </div>
  )
}