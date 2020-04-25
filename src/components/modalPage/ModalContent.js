import React, { Component } from "react";
import Modal from "./Modal";
import { TodoList } from "../mainPage/TodoList";

export default class ModalContent extends Component {
  state = { isModalOpen: true };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.props.history.push("/main");
  // closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { title, text } = this.props.location.state.task.task;
    console.log("this.props", this.props);
    console.log("this.state.isModalOpen", this.state.isModalOpen);
    return (
      <div>
        {/* <button onClick={this.openModal}>Open</button> */}

        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1 contenteditable="true">{title}</h1>
            <p contenteditable="true">{text}</p>
            <button onClick={this.closeModal}>Close Modal</button>
          </Modal>
        )}
      </div>
    );
  }
}
