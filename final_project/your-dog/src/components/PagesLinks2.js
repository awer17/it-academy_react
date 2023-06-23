import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

export const PagesLinks2 = () => {
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
    }

    return (
      <div className='link'>
        <NavLink to="/" className="PageLink">all breeds</NavLink>
        <NavLink to="/detals" className="PageLink">detals</NavLink>
      </div>
    );

};
