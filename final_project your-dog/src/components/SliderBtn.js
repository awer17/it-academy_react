import React from "react";
import './SliderBtn.css'
import btnSlid from '../img/svg/btn-slider.svg'
import { updateСhangelistState } from "../redux/dogSlice";
import { useDispatch, useSelector } from 'react-redux';


export const SliderBtn = (props) => {

  const dispatch = useDispatch();
  function decApples() {
    dispatch( updateСhangelistState(props.elementСount))
  };

  return (
    <div className={props.classBrnLef} onClick={decApples} >
      <img src={btnSlid} className="btnSlid" alt="btnSlid" />
    </div>
  )
}