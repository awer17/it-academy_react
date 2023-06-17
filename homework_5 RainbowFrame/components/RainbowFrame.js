import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './RainbowFrame.css';
import Childen from './Childen'

import withRainbowFrame from './withRainbowFrame';

class RainbowFrame extends React.Component{
    static propTypes = {
        colors: PropTypes.array,
        childen: PropTypes.string
    }

    render(){
        let WithRainbow = withRainbowFrame(this.props.colors)(Childen)

        return <WithRainbow/>
    }
}


export default RainbowFrame;