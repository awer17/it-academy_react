import React from "react";
import './SliderBtn.css'
import btnSlid from '../img/svg/btn-slider.svg'


export const SliderBtn = (props) => {

  return (
    <div className={props.classBrnLef} >
      <img src={btnSlid} className="btnSlid" alt="btnSlid" />
    </div>
  )
}