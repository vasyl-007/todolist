import React, { Component } from "react";
// import shortId from "shortid";
import styles from "./MainPage.module.css";
import { TodoList } from "./TodoList";
import Form from "./Form";

class MainPage extends Component {
  state = {
    allTasks: [],
  };

  putToAllTasks = (newTask) => {
    this.setState({
      allTasks: [newTask, ...this.state.allTasks],
    });
  };

  deleteTask = (id) => {
    // console.log("id--------->", id);
    this.setState((prev) => ({
      allTasks: prev.allTasks.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { allTasks } = this.state;
    // console.log("allTasks", allTasks);
    return (
      <section className={styles.container}>
        <h3>All tasks</h3>
        <Form addTask={this.putToAllTasks} />

        {allTasks.length > 0 && (
          <TodoList tasks={allTasks} deleteTask={this.deleteTask} />
        )}
      </section>
    );
  }
}

export default MainPage;
