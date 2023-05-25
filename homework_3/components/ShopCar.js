import React from 'react';
import PropTypes from 'prop-types';

import './ShopCar.css';

import ItemShop from './ItemShop';


class ShopCar extends React.Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        car: PropTypes.arrayOf(
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
    };

    render(){

        var columName = [];
        var arrColum = Object.keys(this.props.car[0]);
        for ( var i = 0; i < arrColum.length; i++ ){
            var columNameItem = arrColum[i]
            if( columNameItem !== "code"){
                columName.push(<th key={i} className="_columName">{columNameItem}</th>)
            }
        };

        var elemItem = this.state.carList.map( elem =>
            <ItemShop key =  {elem.code}
                code = {elem.code}
                brand = {elem.brand}
                madel = {elem.madel}
                year = {elem.year}
                foto = {elem.foto}
                description = {elem.description}
                priсe = {elem.priсe}
                control = {elem.control}
                selCode = {this.state.selCode}
                cbSelect = {this.select}
                cbDelete = {this.delete}/>
        );

        return (
            <div className="votes-block">
                <a href="../../index.html"> Hone</a>
                <h1>{this.props.title}</h1>
                <table>
                    <thead>
                        <tr>{columName}</tr>
                    </thead>
                    <tbody className="item">{elemItem}</tbody>
                </table>
            </div>
        )
    }
}

export default ShopCar;
