import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {DogSlider} from "../components/DogSlider";
import {FiltrSearch} from '../components/FiltrSearch'
import {SliderBtn} from '../components/SliderBtn'
import './PageHome.css'

// import { updateСhangelistState } from "../redux/dogSlice";


export const PageHome = () => {
  let elementСount = useSelector( state => state.dog.elementСount); 
  const changelist = useSelector( state => state.dog.changelist); 
  const dogListAll = useSelector( state => state.dog); 
  let notActiveBack, notActive = " "

  
  let elementСountBack = elementСount
  if (changelist <= 0) {
    elementСountBack = 0;
    notActiveBack = "not-active"
  } 
  if (changelist >= dogListAll.dogList.length - elementСount ) {
    elementСount = 0;
    notActive = "not-active"
  }


  
    return (
      <div className='wrapper-page-home'>
        <div className="wrap-title">
          <h1>Your Dog</h1>
          <p>Сhoose the breed of dog that suits you</p>
        </div>
        <div className="wrap-search">
          <FiltrSearch/>
          <div className="slider-wrap">
            < DogSlider doglist={dogListAll.dogList}/>
            <SliderBtn classBrnLef={`btn-slid ${notActive}`} elementСount={elementСount} />
            <SliderBtn classBrnLef={`btn-slid-lefr ${notActiveBack}`} elementСount={-elementСountBack}/>
          </div>
        </div>
        
        
      </div>
    );
    
};
