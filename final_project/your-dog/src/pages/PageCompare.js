import React, { useState } from 'react';
import { StyleContext } from "../context/StyleContext";
import { DogSlider } from "../components/DogSlider";



export const PageCompare = () => {

  const incFontSize = () => { setStyle(6) };
  const [style,setStyle]=useState( { DogList: [],  incFontItems: incFontSize } );
          
  return (
    <StyleContext.Provider value={ style }>
      eec
    </StyleContext.Provider>
  );
    
}
