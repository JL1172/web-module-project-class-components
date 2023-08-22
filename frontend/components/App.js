import React from 'react'
import list from "./ListOfTodos";
import TodoList from './TodoList';
import Form from "./Form";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodos : list,
      selectedTodo : [],
      addedTodo : "",
    }
  }
  change = e => {
    this.setState({...this.state, addedTodo : e.target.value})
  }
  submit = e => {
    e.preventDefault();
    const newTodo = {
      name : this.state.addedTodo,
      id : Date.now(),
      completed : false,
    }
    this.setState({...this.state, listOfTodos :
       [...this.state.listOfTodos, newTodo],addedTodo : ""});
    }
    toggle = (e,idOfItem) => {
      e.target.classList.toggle("clicked"); 
        this.setState({...this.state, listOfTodos : this.state.listOfTodos.map(n => {
          if (idOfItem === n.id) {
            return {...n, completed : !n.completed}
          } else {
            return n;
          }
        })})
    };
    clear = e => {
        this.setState({...this.state, listOfTodos : this.state.listOfTodos.filter(n => {
          return !n.completed; 
        })})
    }
  render() {
    return (
      <div>
        <h2>
        Todos:
        </h2>
        <TodoList toggle = {this.toggle} list = {this.state.listOfTodos}/>
        <Form clear = {this.clear} addedTodo = {this.state.addedTodo}
        change = {this.change} submit = {this.submit} />
      </div>
    )
  }
}
