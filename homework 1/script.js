var MyComponent = React.createClass({

    displayName: 'MyComponent',

    render: function(){
        return React.DOM.div(
            {className: 'MyComponent'},
            React.DOM.h1( null, "hellow1"),
            React.DOM.div( {className: "_text"}, 'Reakt start')
        );
    },
});