import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input name = "addedTodo" id = "addedTodo"
          value = {this.props.addedTodo} onChange={this.props.change}
          placeholder='Add To List' />
          <input disabled = {this.props.disabled} type = "submit" id = "submit" />
        </form>
        <input onClick = {this.props.clear} type = "button" id = "clear" name = "clear"
          value = "Hide Completed" />
      </div>
    )
  }
}
