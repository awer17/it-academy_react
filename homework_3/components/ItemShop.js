import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

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
            

        return DOM.tr({className: '_item-car', style:{backgroundColor: color}, onClick:this.select,}, 
                DOM.td(null, this.props.brand),
                DOM.td(null, this.props.madel),
                DOM.td(null, this.props.year),
                DOM.td(null,
                    DOM.img({src: this.props.foto, alt: this.props.brand + " "+ this.props.madel})
                    ),
                DOM.td(null, this.props.description),
                DOM.td(null, this.props.priсe),
                DOM.td(null, 
                    DOM.button({onClick: this.control}, this.props.control)),
        )
    };
}




