import React from "react";
import { useDispatch} from 'react-redux';
import { addCompare } from "../redux/dogSlice";



export const AddCompare = (props) => {
  const dispatch = useDispatch();

  function addCompareBtn() {
    dispatch( addCompare(props.code))
  };

  return(
    <input className="slide" type="button" value="Add to comparison" onClick={addCompareBtn}/>
  )
}