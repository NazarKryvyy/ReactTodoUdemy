var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');



var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walck the dog',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: 3,
                    text: 'Leave mail on porch',
                    completed: false
                },
                {
                    id: 4,
                    text: 'Play video games',
                    completed: true
                }
            ]
        }
    },
    handleToggle: function(id){
       var updatedTodos = this.state.todos.map((todo)=>{
        if(todo.id === id){
            todo.completed = !todo.completed;
        }   
        return todo;
       });

       this.setState({todos: updatedTodos});
    },
    handleAddTodo: function(text){
       this.setState({
           todos : [
               ...this.state.todos,
               {
                   id: uuid(),
                   text: text,
                   completed: false
               }
            ]
       })        
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo addTodo = {this.handleAddTodo}/>
            </div>
        )
    }
})

module.exports = TodoApp;