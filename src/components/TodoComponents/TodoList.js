// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {this.props.state.map((task, i) => {
          return (
            <Todo
              toggleComplete={this.props.toggleComplete}
              key={i}
              task={task.task}
              completed={task.completed}
              id={task.id}
            />
          );
        })}
      </div>
    );
  }
}
