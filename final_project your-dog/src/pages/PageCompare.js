import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemCompare } from "../components/ItemCompare";
import './PageCompare.css'



export const PageCompare = () => {

  const   listCompare  = useSelector( state => state.dog.listCompare); 
  
  

  if (listCompare.length !== 0){
    let elemItem = listCompare.map( elem =>
      <ItemCompare  key={elem.code}
        elem={elem}>
        </ItemCompare>)
    return ( 
      <div className="page-compare">
        {elemItem}
        
      </div>
    );  
  }
  else{
    return (
      <div className="page-compare">
        <p className="no-compare">NO breeds to compare! Add a breed</p>
      </div>
    )
  }
}
