import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((n)=> {
          return <Todo toggle = {this.props.toggle} info = {n.id}
           name = {n.name} key = {n.id}/>
        })}
      </div>
    )
  }
}
