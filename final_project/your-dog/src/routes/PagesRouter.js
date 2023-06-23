import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageHome } from '../pages/PageHome';
import { PageCompare } from '../pages/PageCompare';

export const PagesRouter = () => {

    return (
      <Routes>
        <Route path="/*" element={<PageHome/>} />
        <Route path="/compare" element={<PageCompare/>} />
      </Routes>
    );
    
};
