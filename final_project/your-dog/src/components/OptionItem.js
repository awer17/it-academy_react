import React from "react";
import { NavLink } from 'react-router-dom';


export const OptionItem = (props) => {
  return(
    <option value={props.value}>
      {/* <NavLink to="/detals" className="PageLink">{props.nameBreed}</NavLink> */}
      {props.nameBreed}
      </option>
  )
}