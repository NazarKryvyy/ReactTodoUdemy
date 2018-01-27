var React = require('react');

var AddTodo = React.createClass({
    onSubmitHandler: function(e){
        e.preventDefault();
        var newTask = this.refs.newTask.value;

        if(newTask.length > 0){
            this.refs.newTask.value = '';
            this.props.addTodo(newTask);

        } else{
            this.refs.newTask.focus();
        }
    },
    render: function(){
        return(
            <div>
                <form ref='newTaskForm' onSubmit = {this.onSubmitHandler}>
                    <input type="text" ref='newTask' placeholder="Add new task"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        )
    } 
})

module.exports = AddTodo;