import React from 'react';

import './withRainbowFrame.css';

const withRainbowFrame = colors => Comp => props => {
    let code = <Comp {...props}/>
    colors.forEach(color => {
        code = <div style={{border:`solid 1px ${color}`}}>{code}</div>
    });
    return code
}

export {withRainbowFrame};