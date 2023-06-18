import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

export const PagesLinks = () => {
          
    function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
    }

    return (
      <div>
        <NavLink to="/" end    className={getLinkClass}>Home</NavLink>
        <NavLink to="/compare" className={getLinkClass}>Compare</NavLink>
      </div>
    );

};
