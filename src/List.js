import React from "react";

const TodoItem = props => {
  const completedStyle = props.todo.completed
    ? { textDecoration: "line-through" }
    : {};
  return (
    <div
      style={completedStyle}
      onClick={() => {
        props.click(props.id);
      }}
    >
      {props.todo.title}
    </div>
  );
};
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      todos: []
    };
  }

  // hundler changing title value
  hundler = e => {
    this.setState({
      title: e.target.value
    });
  };

  // Add todo to Todos
  addTodo = e => {
    e.preventDefault(); //
    const todo = { title: this.state.title, completed: false };
    this.setState({
      todos: [...this.state.todos, todo],
      title: ""
    });
  };
  // MAke Todo Completed
  makeItCompleted = id => {
    this.setState({
      todos: this.state.todos.map(
        (todo, index) =>
          id === index ? { ...todo, completed: !todo.completed } : todo //
      )
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            id={index}
            key={index}
            click={this.makeItCompleted}
          />
        ))}
        <form onSubmit={this.addTodo}>
          <input
            value={this.state.title}
            onChange={this.hundler}
            placeholder="Add Todo Item"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
