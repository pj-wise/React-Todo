import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div
        onClick={() => this.props.toggleComplete(this.props.id)}
        className={
          this.props.completed === true ? "todoItem completedTask" : "todoItem"
        }>
        <h3>Task: {this.props.task} &nbsp;</h3>
      </div>
    );
  }
}
