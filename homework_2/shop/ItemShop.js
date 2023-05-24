var ItemShop = React.createClass({
    displayName: 'ItemShop',

    propTypes: {
        // key: React.PropTypes.number,
        code: React.PropTypes.any,
        brand: React.PropTypes.string,
        madel: React.PropTypes.string,
        year: React.PropTypes.string,
        foto: React.PropTypes.string,
        description: React.PropTypes.string,
        priсe: React.PropTypes.string,
        control: React.PropTypes.string,
        selCode: React.PropTypes.any,
        cbSelect: React.PropTypes.any,
        cbDelete: React.PropTypes.any
    },

    select(){
        this.props.cbSelect(this.props.code);
    },

    control(eo){
        eo.stopPropagation();
        this.props.cbDelete(this.props.code);
        // console.log("delete")
    },
    render: function(){
        var color = ""
            this.props.selCode === this.props.code? color = "red" : color = "white"
            

        return React.DOM.tr({className: '_item-car', style:{backgroundColor: color}, onClick:this.select,}, 
                React.DOM.td(null, this.props.brand),
                React.DOM.td(null, this.props.madel),
                React.DOM.td(null, this.props.year),
                React.DOM.td(null,
                    React.DOM.img({src: this.props.foto, alt: this.props.brand + " "+ this.props.madel})
                    ),
                React.DOM.td(null, this.props.description),
                React.DOM.td(null, this.props.priсe),
                React.DOM.td(null, 
                    React.DOM.button({onClick: this.control}, this.props.control)),
            )
    },
})