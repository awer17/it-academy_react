import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageDogList } from '../pages/PageDogList';
import { PageDetals } from '../pages/PageDetals';
import { PageList } from '../pages/PageList';

export const PagesRouterSlider = () => {
          
    return (
    <Routes>
      <Route path="/*" element={<PageDogList/>} />
      <Route path="/detals" element={<PageDetals/>} />
      <Route path="/list"  element={<PageList/>}/>
    </Routes>
);
    
};
