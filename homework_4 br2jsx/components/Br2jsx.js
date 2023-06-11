import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './Br2jsx.css';

class Br2jsx extends React.Component{
    static propTypes = {
        text: PropTypes.string,
    }

    render(){
        const lines = this.props.text.split(/<br *\/?>/g);
        const arr = [];
        for(let i = 0; i < lines.length; i++){
          if(i)
            arr.push(<br/>)
          arr.push(lines[i])
        }
        return <div className='wrap'>{arr}</div>
    }
}


export default Br2jsx;