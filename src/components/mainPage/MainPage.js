import React, { Component, Fragment } from "react";
import shortId from "shortid";
import styles from "./MainPage.module.css";
import { TodoList } from "./TodoList";

const INITIAL_STATE = {
  task: {
    title: "",
    text: "",
  },
  allTasks: [],
};
class MainPage extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    // console.log("target --------->", target);
    const { name, value } = target;
    this.setState({
      task: { ...this.state.task, [name]: value },
    });
  };
  handleSubmit = (e) => {
    const { task } = this.state;
    e.preventDefault();
    const newTask = {
      id: shortId.generate(),
      task,
    };
    this.setState({
      allTasks: [newTask, ...this.state.allTasks],
    });
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      task: {
        title: "",
        text: "",
      },
    });
  };

  deleteTask = (id) => {
    this.state.allTasks.map((task) => task);

    this.setState((prev) => [...prev.allTasks.filter((item) => item.id !== id))]
  };
  render() {
    const { title, text } = this.state.task;
    const { allTasks } = this.state;
    // console.log("allTasks", allTasks);
    return (
      <section className={styles.container}>
        <h3>All tasks</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={title}
            className={styles.input}
          />
          <input
            type="text"
            name="text"
            onChange={this.handleChange}
            value={text}
            className={styles.input}
          />
          <button>Add task</button>
        </form>

        {allTasks.length > 0 && <TodoList tasks={allTasks} />}
      </section>
    );
  }
}

export default MainPage;
