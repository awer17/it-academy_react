import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './RainbowFrame.css';

class RainbowFrame extends React.Component{
    static propTypes = {
        colors: PropTypes.array,
        childen: PropTypes.string
    }

    render(){
        let contend = this.props.childen;
        for( let color of this.props.colors)
            contend = <div style={{border:`solid 1px ${color}`}}>{contend}</div>

            // let contend = this.props.colors.reduce(
			// 	(acc,color) => {
			// 	<div style={{border:`solid 1px ${color}`}}>acc</div>}, 
			// this.props.childen
			// );

        return <div className='wrap'>{contend}</div>
    }
}


export default RainbowFrame;