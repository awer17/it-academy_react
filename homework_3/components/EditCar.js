import React from 'react';
import './EditCar.css';

import PropTypes from 'prop-types';

class EditCar extends React.Component{

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
            selCode: PropTypes.any,
            cdSave: PropTypes.any,
            editStarted: PropTypes.func,
        })
    };

    state = {
        itemBrand: this.props.itemViewCard.brand,
        itemModel: this.props.itemViewCard.model,
        itemYear: this.props.itemViewCard.year,
        itemPriсe: this.props.itemViewCard.priсe,
        itemDescription: this.props.itemViewCard.description,
    };

    changeBrand = (oe) =>{
        this.setState({itemBrand:oe.target.value})
        this.props.editStarted(true)
    };
    changeModel = (oe) =>{
        this.setState({itemModel:oe.target.value})
        this.props.editStarted(true)
    };
    changeYear = (oe) =>{
        this.setState({itemYear:oe.target.value})
        this.props.editStarted(true)
    };
    changeDescription = (oe) =>{
        this.setState({itemDescription:oe.target.value})
        this.props.editStarted(true)
    };
    changePrice = (oe) =>{
        this.setState({itemPriсe:oe.target.value})
        this.props.editStarted(true)
    };
    clickSave = ()=>{
        this.props.cdSave(this.props.itemViewCard.code,        
            {brand:this.state.itemBrand,
            model:this.state.itemModel,
            year:this.state.itemYear,
            priсe:this.state.itemPriсe,
            description:this.state.itemDescription})
    };

    render() {
        return (<div className="editCar">
            <img src={this.props.itemViewCard.foto} alt={this.props.itemViewCard.madel} />
            <input type="text" placeholder={this.state.itemBrand} onChange={this.changeBrand} />
            <input type="text" placeholder={this.state.itemPriсe} onChange={this.changePrice} />
            <input type="text" placeholder={this.state.itemModel} onChange={this.changeModel}/>
            <input type="text" placeholder={this.state.itemYear} onChange={this.changeYear} />
            <textarea type="text" rows="10" placeholder={this.state.itemDescription} onChange={this.changeDescription} />
            <button onClick={this.clickSave}> Save</button>
        </div>
        )
    }
}

export default EditCar;
