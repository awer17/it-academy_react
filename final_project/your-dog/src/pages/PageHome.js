import React, { useState } from 'react';
import { StyleContext } from "../context/StyleContext";
import { DogSlider } from "../components/DogSlider";

import {FiltrSearch} from '../components/FiltrSearch'
import { dogListData } from '../dogListData'
import {SliderBtn} from '../components/SliderBtn'

export const PageHome = () => {

  


  // const incItemSlide = () => { setStyle( {itemSlide:6}) };
  const [style,setStyle]=useState( { DogList: dogListData.dogListData,  incItemSlide: 5 } );

    
    return (
      <div>
        <div className="wrap-title">
          <h1>Your Dog</h1>
          <p>Сhoose the breed of dog that suits you</p>
        </div>
        <div className="wrap-search">
          <FiltrSearch/>
          <div className="slider-wrap">
          <StyleContext.Provider value={ style }>
            < DogSlider/>
            <SliderBtn/>
          </StyleContext.Provider>
          </div>
        </div>
        
        
      </div>
    );
    
};
