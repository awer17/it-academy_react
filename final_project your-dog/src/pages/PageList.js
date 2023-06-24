import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DogSlid } from "../components/DogSlid";
import './PageList.css'


export const PageList = () =>{

  const dogListAll = useSelector( state => state.dog.filterBreedsList); 

    let elemItem = dogListAll.map( elem =>
    <DogSlid  key={elem.code}
      elem={elem}/>)

      return(
        <div className="wrap-lst">
          {elemItem}
        </div>
      )
}