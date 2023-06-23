import React from "react";
import { updateCodeDetals } from "../redux/dogSlice";
import { useDispatch, useSelector } from 'react-redux';

export const Detals = (props) => {
  console.log(props.code)

  const changelist = useSelector( state => state.dog.detalsElem); 

  const dispatch = useDispatch();
  function codeDetals() {
    dispatch( updateCodeDetals(props.code))
  };

  return(
    <input className="detals" type="button" value="detals" onClick={codeDetals}/>
  )
} 