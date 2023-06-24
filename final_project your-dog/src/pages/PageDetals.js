import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PageDetals.css'
import {AddCompare} from '../components/AddCompare'



export const PageDetals = () => {

  let codeDetal = useSelector( state => state.dog.detalsElem); 
  const arrDog = useSelector( state => state.dog.dogList); 


  const dogDetal = arrDog.filter(s => s.code == codeDetal[0])

  return (
    <div className="wrap-detals">
      <div className="img-block">
        <img className='img-detals' src={codeDetal[1]} alt={dogDetal[0].name} />
        <div className="tetle">
          <p className="title">{dogDetal[0].name}</p>
          <p className="short_description">{dogDetal[0].short_description}</p>
          <AddCompare code={dogDetal[0].code}/>
        </div>
      </div>
      <p className='desc'> {dogDetal[0].description}</p>
      <p className='info'>friendliness: {dogDetal[0].friendliness}</p>
      <a href={dogDetal[0].wiki_article} target="_blank">more on wikipedia</a>
    </div>
  );  
}