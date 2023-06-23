import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


import './PagesLinks2.css';

export const PagesLinks2 = () => {

  const listCompare = useSelector( state => state.dog.listCompare); 

  console.log(listCompare.length)

    return (
      <div className='wrap-link2'>
        <div className='link2'>
          <NavLink to="/" className="PageLink">tile</NavLink>
          <NavLink to="/list" className="PageLink">list</NavLink>
        </div>
        <div className='compare'>
          <NavLink to="/compare" className="PageLink">Compare</NavLink>
          <span>{listCompare.length}</span>
        </div>
      </div> 
      );
};
