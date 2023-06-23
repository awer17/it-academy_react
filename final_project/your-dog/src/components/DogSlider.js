import React, { useContext } from 'react';
import { DogSlid } from "../components/DogSlid";
import './DogSlider.css'
import { useSelector } from 'react-redux';



export const DogSlider = () => {

  const dogListAll = useSelector( state => state.dog.filterBreedsList); 
  const elementСount = useSelector( state => state.dog.elementСount); 
  const changelist = useSelector( state => state.dog.changelist); 

  const rendDoglist = dogListAll.slice(0 + changelist ,elementСount + changelist)


  let elemItem = rendDoglist.map( elem =>
    <DogSlid key={elem.code}
      elem={elem}/>)

  return (
    <div className="elem-slide">{elemItem}</div>
  )
}