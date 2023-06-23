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
        <NavLink to="/" className="PageLink">tile</NavLink>
        {/* <NavLink to="/detals" className="PageLink">detals</NavLink> */}
        <NavLink to="/list" className="PageLink">list</NavLink>
      </div>
    );
};
