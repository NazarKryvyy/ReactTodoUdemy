var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    
    render: function(){
        var {text, id, completed, createAt, completedAt} = this.props;
        var renderDate = ()=>{
            var message = 'Created';
            var timestemp = createAt;
            if(completed){
                message = 'Completed';
                timestemp = completedAt;
            }

            return message + moment.unix(timestemp).format('MMM Do YYYY @ h:mm a');
        }

        return(
            <div onClick={()=>{
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
})

module.exports = Todo;