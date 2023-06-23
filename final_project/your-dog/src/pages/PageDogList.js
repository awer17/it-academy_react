import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {DogSlider} from "../components/DogSlider";
import {FiltrSearch} from '../components/FiltrSearch'
import {SliderBtn} from '../components/SliderBtn'

export const PageDogList = () => {
  let elementСount = useSelector( state => state.dog.elementСount); 
  const changelist2 = useSelector( state => state.dog.changelist); 
  const dogListAll = useSelector( state => state.dog); 
  let notActiveBack, notActive = " "

  
  let elementСountBack = elementСount
  if (changelist2 <= 0) {
    elementСountBack = 0;
    notActiveBack = "not-active"
  } 
  if (changelist2 >= dogListAll.dogList.length - elementСount ) {
    elementСount = 0;
    notActive = "not-active"
  }  


  return (
          <div className="slider-wrap">
            <DogSlider doglist={dogListAll.dogList}/>
            <SliderBtn classBrnLef={`btn-slid ${notActive}`} elementСount={elementСount} />
            <SliderBtn classBrnLef={`btn-slid-lefr ${notActiveBack}`} elementСount={-elementСountBack}/>
          </div>
  );  
}