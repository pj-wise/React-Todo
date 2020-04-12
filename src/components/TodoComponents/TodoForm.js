import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='newTask'
            value={this.state.newTask}
            type='text'
            onChange={this.handleChange}
            placeholder='Add a task to Todo List'
          />
          <button type='submit'>Add Task</button>
        </form>
      </div>
    );
  }
}
