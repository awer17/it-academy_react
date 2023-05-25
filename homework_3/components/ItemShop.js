import React from 'react';
import PropTypes from 'prop-types';

import './itemShop.css';

class ItemShop extends React.Component{

    static propTypes = {
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
    };

    select = () => {
        this.props.cbSelect(this.props.code);
    };

    control = (eo) => {
        eo.stopPropagation();
        this.props.cbDelete(this.props.code);
    };

    render () {
        var color = ""
            this.props.selCode === this.props.code? color = "red" : color = "white"
            

        return (<tr className="_item-cae" style ={{backgroundColor: color}} onClick={this.select}>
            <td>{this.props.brand}</td>
            <td>{this.props.madel}</td>
            <td>{this.props.year}</td>
            <td><img src={this.props.foto} alt={this.props.brand + "_" + this.props.madel} /></td>
            <td>{this.props.description}</td>
            <td>{this.props.priсe}</td>
            <td>
                <button>edite</button>
                <button onClick={this.control}>delete</button>
            </td>
        </tr>)
    };
}
export default ItemShop;



