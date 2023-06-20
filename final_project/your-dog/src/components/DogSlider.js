import React, { useContext } from 'react';
import { StyleContext } from "../context/StyleContext";
import { DogSlid } from "../components/DogSlid";
import './DogSlider.css'


export const DogSlider = () => {

  const currStyle = useContext(StyleContext); // gets what the nearest StyleContext.Provider provides
  const rendDoglist = currStyle.DogList.slice(0,6)
  console.log(rendDoglist);

  let elemItem = rendDoglist.map( elem =>
    <DogSlid key={elem.code}
      elem={elem}/>)

  return (
    <div className="elem-slide">{elemItem}</div>
  )
}
