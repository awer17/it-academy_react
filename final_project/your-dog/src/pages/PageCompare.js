import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DogSlid } from "../components/DogSlid";
import {AddCompare} from '../components/AddCompare'




export const PageCompare = () => {

  const   listCompare  = useSelector( state => state.dog.listCompare); 
  
  

  if (listCompare.length !== 0){
    console.log(listCompare)
    let elemItem = listCompare.map( elem =>
      <DogSlid  key={elem.code}
        elem={elem}>
        </DogSlid>)
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
