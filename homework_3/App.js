import React from 'react';
import ReactDOM from 'react-dom';

import ShopCar from './components/ShopCar';

let titleList = 'Car for sale';
let carList = require('./carList.json');


ReactDOM.render(
  <ShopCar
  title = {titleList}
  car = {carList}
  />,
  document.getElementById('container') 
);

