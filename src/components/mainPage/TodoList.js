import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TodoList.module.css";
// import ModalContent from "../modalPage/ModalContent";

export const TodoList = ({ tasks, deleteTask }) => (
  <ul >
  {/* <ul className={styles.container}> */}
    {tasks.map((taskItem) => (
      <li key={taskItem.id} className={styles.task}>
        <h3 className={styles.title}>{taskItem.task.title}</h3>
        <p>{taskItem.task.text}</p>
        <p className={styles.date}>[ created at: {taskItem.dated} ]</p>

        {/* <NavLink to="/modal"> */}
        <button className={styles.button} >
          Edit
        </button>
        {/* </NavLink> */}

        <button
          className={styles.button}
          onClick={() => deleteTask(taskItem.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
