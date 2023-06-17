import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './Childen.css';

class Childen extends React.Component{
    static propTypes = {
        childen: PropTypes.string
    }
    render () {
        return <p>{this.props.childen}</p>
    }
}

export default Childen;