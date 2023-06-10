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
        brandError: "",
        priceError:"",
        modelError: "",
        yearError: "",
        descriptionError: "",
        valideSeva: false,
    };

    changeBrand = (oe) =>{
        this.setState({itemBrand:oe.target.value},this.validate())
        this.props.editStarted(true)
    };
    changeModel = (oe) =>{
        this.setState({itemModel:oe.target.value},this.validate())
        this.props.editStarted(true)
    };
    changeYear = (oe) =>{
        this.setState({itemYear:oe.target.value},this.validate())
        this.props.editStarted(true)
    };
    changeDescription = (oe) =>{
        this.setState({itemDescription:oe.target.value},this.validate())
        this.props.editStarted(true)
    };
    changePrice = (oe) =>{
        this.setState({itemPriсe:oe.target.value},this.validate())
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

    validate = () => {
        const brandError = this.state.itemBrand.replaceAll(' ', '') ? "" : "fill in brand";
        const priceError = isNaN(this.state.itemPriсe) || this.state.itemPriсe.replaceAll(' ', '') == "" ? "enter number" : ""
        const modelError = this.state.itemModel.replaceAll(' ', '') ? "" : "fill in model"
        const yearError = isNaN(this.state.itemYear) || this.state.itemYear.replaceAll(' ', '') == "" ? "enter number" : ""
        const descriptionError = this.state.itemDescription.replaceAll(' ', '') ? "" : "fill in model"

        this.setState({brandError, priceError, modelError,yearError, descriptionError,
            valideSeva: (!brandError)&&(!priceError)&&(!modelError)&&(!yearError)&&(!descriptionError)})
    };

    // clickCansel = ()=>{
    //     this.setState({itemBrand: this.props.itemViewCard.brand,
    //         itemModel: this.props.itemViewCard.model,
    //         itemYear: this.props.itemViewCard.year,
    //         itemPriсe: this.props.itemViewCard.priсe,
    //         itemDescription: this.props.itemViewCard.description})
    // }


    render() {
        return (<div className="editCar">
            <img src={this.props.itemViewCard.foto} alt={this.props.itemViewCard.madel} />
            <input type="text" placeholder={this.state.itemBrand} onChange={this.changeBrand} />
            <span className="error">{this.state.brandError}</span>

            <input type="text" placeholder={this.state.itemPriсe} onChange={this.changePrice} />
            <span className="error">{this.state.priceError}</span>

            <input type="text" placeholder={this.state.itemModel} onChange={this.changeModel}/>
            <span className="error">{this.state.modelError}</span>

            <input type="text" placeholder={this.state.itemYear} onChange={this.changeYear} />
            <span className="error">{this.state.yearError}</span>

            <textarea type="text" rows="10" placeholder={this.state.itemDescription} onChange={this.changeDescription} />
            <span className="error">{this.state.descriptionError}</span>

            <button disabled={!this.state.valideSeva} onClick={this.clickSave}> Save</button>
            {/* <button  onClick={this.clickCansel}> Cancel</button> */}
        </div>
        )
    }
}

export default EditCar;
