import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemCompare } from "../components/ItemCompare";




export const PageCompare = () => {

  const   listCompare  = useSelector( state => state.dog.listCompare); 
  
  

  if (listCompare.length !== 0){
    let elemItem = listCompare.map( elem =>
      <ItemCompare  key={elem.code}
        elem={elem}>
        </ItemCompare>)
    return ( 
      <div className="wrap-lst">
        {elemItem}
        
      </div>
    );  
  }
  else{
    return (
      <div className="page-compare">
        NO breeds to compare! Add a breed
      </div>
    )
  }
}
