var MyComponent = React.createClass({

    displayName: 'MyComponent',
    
    propTypes: {
        car:React.PropTypes.array,
        title:React.PropTypes.string,
    },

    render: function(){

        var columName = []
        var arrColum = Object.keys(this.props.car[0])
        for ( var i = 0; i < arrColum.length; i++ ){
            var columNameItem = arrColum[i]
            if( columNameItem !== "code"){
                columName.push(React.DOM.th({key:i, className:"_columName"}, columNameItem))
            }
        }

        // var itemElem = this.props.car.map( elem =>
        //     React.createElement( ItemShop, {key: elem.code,
        //         brand: elem.brand,
        //         madel: elem.madel,
        //         year: elem.year,
        //         foto: elem.foto,
        //         description: elem.description,
        //         priсe: elem.priсe,
        //         control: elem.control 
        //     })
        // )

        return React.DOM.div(
            {className: 'MyComponent'},
            React.DOM.h1( null, titleList),
            React.DOM.table( null,
                React.DOM.thead( null,
                    React.DOM.tr(null, columName)),
                React.DOM.tbody(null, ItemShop)
                )
        );
    },
});
