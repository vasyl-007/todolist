import React, { Component } from "react";
// import shortId from "shortid";
import styles from "./MainPage.module.css";
import { TodoList } from "./TodoList";
import Form from "./Form";

class MainPage extends Component {
  state = {
    allTasks: [],
  };

  componentDidMount() {
    const storageTasksUnparsed = localStorage.getItem("tasks");
    const storageTasks = JSON.parse(storageTasksUnparsed);
    if (storageTasks) {
      this.setState({
        allTasks: storageTasks,
      });
    }
    console.log("this.props-------------", this.props);
    if (this.props.location.state === null) {
      console.log("YES!!!!");
    }
    if (this.props.location.state !== null) {
      this.editTask(
        this.props.location.state.id,
        this.props.location.state.task.newTitle,
        this.props.location.state.task.newText
      );
    }
  }

  putToAllTasks = async (newTask) => {
    await this.setState({
      allTasks: [newTask, ...this.state.allTasks],
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.allTasks));
  };

  deleteTask = (id) => {
    // console.log("id--------->", id);
    this.setState((prev) => ({
      allTasks: prev.allTasks.filter((item) => item.id !== id),
    }));
  };

  checkChange = (id) => {
    this.setState((prev) => ({
      allTasks: prev.allTasks.map((item) =>
        item.id === id ? { ...item, check: !item.check } : { ...item }
      ),
    }));
  };

  editTask = (id, newTitle, newText) => {
    // console.log("text ++++++");
    console.log("state ++++++", this.state);
    // this.setState((prev) => ({
    //   allTasks: prev.allTasks.map((item) => {
    //     if (item.id === id) {
    //       // item.title = newTitle;
    //       // item.text = newText;
    //       console.log('item ------------->', item)
    //     }
    //     console.log("allTasks+++++++", this.allTasks);
    //   }),
    // }));
  };
  // editTask = (id, newTitle, newText) => {
  //   this.setState((prev) => ({
  //     allTasks: prev.allTasks.map((item) =>
  //       item.id === id
  //         ? { ...item, title: newTitle, text: newText }
  //         : { ...item }
  //     ),
  //   }));
  // };

  render() {
    console.log('this.state  ------+++', this.state)
    console.log("this.props", this.props);
    const { allTasks } = this.state;
    console.log("allTasks", allTasks);
    // console.log("allTasks", allTasks);
    return (
      <section className={styles.container}>
        <h3 className={styles.header}>All tasks</h3>
        <Form addTask={this.putToAllTasks} />

        {allTasks.length > 0 && (
          <TodoList
            tasks={allTasks}
            deleteTask={this.deleteTask}
            checkChange={this.checkChange}
            editTask={this.editTask}
          />
        )}
      </section>
    );
  }
}

export default MainPage;
