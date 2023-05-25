import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './ShopCar.css';

import ItemShop from './ItemShop';


class ShopCar extends React.Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        car: PropTypes.array.arrayOf(
            PropTypes.shape({
                code: PropTypes.any,
                brand: PropTypes.string,
                madel: PropTypes.string,
                year: PropTypes.string,
                foto: PropTypes.string,
                description: PropTypes.string,
                priсe: PropTypes.string,
                control: PropTypes.string,
                selCode: PropTypes.any,
                cbSelect: PropTypes.any,
                cbDelete: PropTypes.any
            })
        )
    };

    state = {
        selCode: null,
        carList: this.props.car
    };

    select = (code) => {
        this.setState( {selCode: code});
    };

    delete = (code) => {
        this.setState({carList: this.state.carList.filter(item => item.code !== code)});
        console.log(code, this.state.carList.filter(item => item.code !== code))
    };

    render(){

        var columName = [];
        var arrColum = Object.keys(this.props.car[0]);
        for ( var i = 0; i < arrColum.length; i++ ){
            var columNameItem = arrColum[i]
            if( columNameItem !== "code"){
                columName.push(React.DOM.th({key:i, className:"_columName"}, columNameItem))
            }
        };

        var elemItem = this.state.carList.map( elem =>
            React.createElement(ItemShop, {key: elem.code,
                code:elem.code,
                brand: elem.brand,
                madel: elem.madel,
                year: elem.year,
                foto: elem.foto,
                description: elem.description,
                priсe: elem.priсe,
                control: elem.control,
                selCode: this.state.selCode,
                cbSelect: this.select,
                cbDelete: this.delete
            })
        );

        return DOM.div(
            {className: 'MyComponent'},
            DOM.a({href:"../../index.html"},"Home"),
            DOM.h1( null, titleList),
            DOM.table( null,
                DOM.thead( null,
                    DOM.tr(null, columName)),
                DOM.tbody({className:'item'}, elemItem)
                )
        );
    }
}

export default ShopCar;
