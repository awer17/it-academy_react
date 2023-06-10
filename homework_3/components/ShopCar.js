import React from 'react';
import PropTypes from 'prop-types';

import './ShopCar.css';

import ItemShop from './ItemShop';
import ViewCard from './ViewCar';
import EditCard from'./EditCar';


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
                cbDelete: PropTypes.any,
                cdSave: PropTypes.any
            })
        )
    };

    state = {
        selCode: null,
        carList: this.props.car,
        workMode: 0,
        editCode: null,
        editStarted: false,
    };

    editStarted = (a) =>{
        this.setState( {editStarted: a});
    }

    select = (code) => {
        if(this.state.editStarted === false){
        this.setState( {selCode: code});
        this.setState( {workMode: 1});}
    };

    delete = (code) => {
        this.setState({carList: this.state.carList.filter(item => item.code !== code)});
        this.setState( {workMode: 0, editStarted: false,});
    };

    edit = (code) => {
        this.setState( {selCode: code})
        this.setState({editCode: code})
        this.setState( {workMode: 2, editStarted: false,});
    };

    itemSave =(code,chenge) =>{
        let copicCarList =[... this.state.carList];
        const itemIdex = copicCarList.findIndex(item => item.code == code);
        let item = this.state.carList[itemIdex];
        item = {...item,...chenge};
        copicCarList[itemIdex]= item;
        this.setState({carList:copicCarList, workMode: 0, editStarted: false })
        console.log()
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
                madel = {elem.model}
                year = {elem.year}
                foto = {elem.foto}
                description = {elem.description}
                priсe = {elem.priсe}
                control = {elem.control}
                selCode = {this.state.selCode}
                cbSelect = {this.select}
                cbDelete = {this.delete}
                cdEdit = {this.edit}
                editStarted={this.state.editStarted} 
                />
        );
        const selItem = this.state.carList.find( item => item.code === this.state.selCode);
        const selItemEdit = this.state.carList.find( item => item.code === this.state.editCode);
        return (
            <div className="votes-block">
                <a href="../../index.html"> Hone</a>
                <h1>{this.props.title}</h1>
                <div className="wrapp">
                    <table>
                        <thead>
                            <tr>{columName}</tr>
                        </thead>
                        <tbody className="item">{elemItem}</tbody>
                    </table>
                    {(this.state.workMode === 1) && <ViewCard itemViewCard={selItem} />}
                    {(this.state.workMode === 2) && <EditCard key={this.state.editCode} itemViewCard={selItemEdit} cdSave={this.itemSave} editStarted ={this.editStarted}/>}
                </div>
            </div>
        )
    }
}

export default ShopCar;
