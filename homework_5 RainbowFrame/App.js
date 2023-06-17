import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let childen = "Hello!"


ReactDOM.render(
  <RainbowFrame
  colors = {colors}
  childen = {childen}
  />,
  document.getElementById('container') 
);
