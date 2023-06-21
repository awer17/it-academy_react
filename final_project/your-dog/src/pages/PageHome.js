import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {DogSlider} from "../components/DogSlider";
import {FiltrSearch} from '../components/FiltrSearch'
import {SliderBtn} from '../components/SliderBtn'
import './PageHome.css'


export const PageHome = () => {
  console.log(window.innerWidth)
  const dogListAll = useSelector( state => state.dog); 
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
            <SliderBtn classBrnLef={"btn-slid"}/>
            <SliderBtn classBrnLef={"btn-slid-lefr"}/>
          </div>
        </div>
        
        
      </div>
    );
    
};
