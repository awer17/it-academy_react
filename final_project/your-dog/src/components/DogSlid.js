import React from 'react';
import './DogSlid.css'
import affenpinscher from '../img/affenpinscher.jpeg'

export const DogSlid = (props) => {


  return (
    <div className='item' >
      <img src={affenpinscher}  alt="photo unavailable" />
      {/* <img src={props.elem.photo}  alt="photo unavailable" /> */}
      <p className="title">{props.elem.name}</p>
      <p >{props.elem.short_description}</p>
      <p >size at the withers: {props.elem.size_at_the_withers}</p>
      <p >friendliness: {props.elem.friendliness}</p>
      <input type="button" value="Add to comparison"/>
    </div> 
  );
};
