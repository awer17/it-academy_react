import React, { useContext } from 'react';
import { DogSlid } from "../components/DogSlid";
import './DogSlider.css'
import { useDispatch, useSelector } from 'react-redux';



export const DogSlider = () => {

  const dogListAll = useSelector( state => state.dog); 
  const rendDoglist = dogListAll.dogList.slice(0,6)


  let elemItem = rendDoglist.map( elem =>
    <DogSlid key={elem.code}
      elem={elem}/>)

  return (
    <div className="elem-slide">{elemItem}</div>
  )
}
