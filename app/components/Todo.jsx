var React = require('react');

var Todo = React.createClass({
    render: function(){
        var {text, id} = this.props;
        function todoTask(){
            return `${id}. ${text}`
        }
        return(
            <div>
                {todoTask()}
            </div>
        )
    }
})

module.exports = Todo;