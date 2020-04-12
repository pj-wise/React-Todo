import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./scss/app.css";

const tasks = [
  {
    task: "Create Todo App",
    id: 7826323238,
    completed: true
  },
  {
    task: "Style Todo App",
    id: 7864325238,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleComplete = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (id === task.id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    });
  };

  addTask = task => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <div className='app'>
        <h1>Class Component Todo App</h1>
        <TodoList
          state={this.state.tasks}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
