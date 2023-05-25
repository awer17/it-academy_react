var MyListWords = React.createClass({

    displayName: "MyListWords",

    propTypes:{
        words:React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },
    

    getInitialState: function (){
        return{
            cdWords:this.props.words,
            textValue:'',
            isSort:false
        }
    },

    sortchanger(eo){
        this.setState({isSort:eo.target.checked},this.processList)
    },

    filtrChange(eo){
        this.setState({textValue:eo.target.value},this.processList);
    },

    reset(eo){
        this.setState({textValue:'', isSort:false},this.processList)
    },

    processList(){
        let cdWords = this.props.words;
        if (this.state.textValue)
            cdWords = cdWords.filter(s => s.includes(this.state.textValue));
        if(this.state.isSort){
            if (cdWords === this.props.words)
                cdWords = cdWords.slice()
            cdWords.sort()
        }
        this.setState({cdWords:cdWords})
    },


    render: function(){

        return React.DOM.form(null,
            React.DOM.input({
                type:'checkbox',
                checked:this.state.isSort,
                onChange:this.sortchanger}),
            React.DOM.input({
                type:'text',
                value:this.state.textValue,
                onChange:this.filtrChange}),
            React.DOM.input({
                className:"btn",
                type:'button',
                value: 'RESET',
                onClick:this.reset}),
            React.DOM.div(null,
                this.state.cdWords.join("\n")
            )  
        )
    }
})
