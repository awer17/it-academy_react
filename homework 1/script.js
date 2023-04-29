var MyComponent = React.createClass({

    displayName: 'MyComponent',

    render: function(){
        var columName = []
        var arrColum = Object.keys(this.props.car[0])
        for ( var i = 0; i < arrColum.length; i++ ){
            var columNameItem = arrColum[i]
            if( columNameItem !== "code"){
                columName.push(React.DOM.th({key:i, className:"_columName"}, columNameItem))
            }
            
        }

        // var columName =  Object.keys(this.props.car[0]).map(elem, index =>
        //     React.DOM.th({key:index, className:"_columName"},elem));

        var answerCode = this.props.car.map( elem =>
            React.DOM.tr( {key:elem.code, className: '_item-car'}, 
                React.DOM.td(null, elem.brand),
                React.DOM.td(null, elem.madel),
                React.DOM.td(null, elem.year),
                React.DOM.td(null, elem.description),
                React.DOM.td(null, elem.priсe),
            )
        )



        return React.DOM.div(
            {className: 'MyComponent'},
            React.DOM.h1( null, titleList),
            React.DOM.table( null,
                React.DOM.thead( null,
                    React.DOM.tr(null, columName)),
                React.DOM.tbody(null, answerCode)
                )
        );
    },
});
