var MyListWords = React.createClass({

    displayName: "MyListWords",

    propTypes:{
        words:React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },
    

    getInitialState: function (){
        return{
            cdWords:this.props.words

        }
    },


    render: function(){
        return React.DOM.form(null,
            
        )
    }
})
