import React, { Component } from "react";
import shortId from "shortid";

const INITIAL_STATE = {
  task: { title: "", text: "" },
};

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

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
    this.props.addTask(newTask);
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
  render() {
    const { title, text } = this.state.task;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={title}
          //   className={styles.input}
        />
        <input
          type="text"
          name="text"
          onChange={this.handleChange}
          value={text}
          //   className={styles.input}
        />
        <button>Add task</button>
      </form>
    );
  }
}
export default Form;
