import React from 'react';
import './ViewCar.css';

import PropTypes from 'prop-types';


class ViewCard extends React.Component{

    static propTypes = {
        itemViewCard: PropTypes.shape
        ({
            code: PropTypes.any,
            brand: PropTypes.string,
            madel: PropTypes.string,
            year: PropTypes.string,
            foto: PropTypes.string,
            description: PropTypes.string,
            priсe: PropTypes.string,
            selCode: PropTypes.any    
        })
    };

    render() {
        console.log(this.props.itemViewCard.code)
        return ( <div className='wrap-car'>
            <img src={this.props.itemViewCard.foto} alt={this.props.itemViewCard.madel} />
            <div>{this.props.itemViewCard.brand}</div>
            <div>{this.props.itemViewCard.madel}</div>
            <div>{this.props.itemViewCard.year}</div>
            <div>{this.props.itemViewCard.foto}</div>
            <div>{this.props.itemViewCard.description}</div>
        </div> )
    };
}

export default ViewCard;