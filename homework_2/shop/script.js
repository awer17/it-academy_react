var MyComponent = React.createClass({

    displayName: 'MyComponent',
    
    propTypes: {
        car:React.PropTypes.array,
        title:React.PropTypes.string,
    },

    getInitialState: function (){
        return{
            selCode: null,
            carList: this.props.car
        }
    },
    select(code){
        this.setState( {selCode: code} );
    },
    delete(code){
        this.setState({carList: this.state.carList.filter(item => item.code !== code)});
        console.log(code, this.state.carList.filter(item => item.code !== code))
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

        var elemItem = this.state.carList.map( elem =>
            React.createElement( ItemShop, {key: elem.code,
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
        )

        return React.DOM.div(
            {className: 'MyComponent'},
            React.DOM.h1( null, titleList),
            React.DOM.table( null,
                React.DOM.thead( null,
                    React.DOM.tr(null, columName)),
                React.DOM.tbody({className:'item'}, elemItem)
                )
        );
    },
});
