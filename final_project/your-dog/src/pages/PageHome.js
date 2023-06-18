import React from 'react';
import {FiltrSearch} from '../components/FiltrSearch'

export const PageHome = () => {
          
    return (
      <div>
        <div className="wrap-title">
          <h1>Your Dog</h1>
          <p>Сhoose the breed of dog that suits you</p>
        </div>
        <div className="wrap-search">
          <FiltrSearch/>

        </div>
        
        
      </div>
    );
    
};
