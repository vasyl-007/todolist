import React, { Component } from "react";
import Modal from "./Modal";
import { TodoList } from "../mainPage/TodoList";

export default class ModalContent extends Component {
  state = {
    isModalOpen: true,
    newTitle1: "",
    // newText1: "",
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.props.history.push("/main");
  // closeModal = () => this.setState({ isModalOpen: false });
  changeValue = () => {};

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      newTitle1: { ...this.state.newTitle1, [name]: value },
    });
  };

  render() {
    const { title, text } = this.props.location.state.task.task;
    // console.log(
    //   "this.props.location.state.editTask",
    //   this.props.location.state
    // );
    console.log("this.props", this.props);
    console.log("this.state.isModalOpen", this.state.isModalOpen);

    return (
      <div>
        {/* <button onClick={this.openModal}>Open</button> */}

        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1 contentEditable>{title}</h1>
            <p>{text}</p>

            <div>
              <span contentEditable={true} onChange={this.onChange}>
                {this.state.newTitle1}
              </span>
              ={this.state.newTitle1}
            </div>

            {/* <h1 contentEditable="true">{title}</h1>
            <p contentEditable="true">{text}</p> */}
            {/* <input
              type="text"
              value={this.state.title}
              onChange={this.changeValue}
            ></input>
            <input
              type="text"
              value={this.state.text}
              onChange={this.changeValue}
            ></input> */}
            <button onClick={this.closeModal}>Close Modal</button>
            <button
              onClick={() =>
                this.props.history.push({
                  pathname: "/main",
                  state: {
                    id: this.props.location.state.task.id,
                    task: {
                      newTitle: "1",
                      newText: "new description",
                    },
                  },
                })
              }
            >
              Save
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
