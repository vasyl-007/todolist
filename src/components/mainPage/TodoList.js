import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TodoList.module.css";
import ModalContent from "../modalPage/ModalContent";

export const TodoList = ({ tasks, deleteTask, checkChange }) => {
  console.log("tasks --->", tasks);
  return (
    <ul>
      {tasks.map((taskItem) => (
        <li key={taskItem.id} className={styles.task}>
          <h3 className={styles.title}>{taskItem.task.title}</h3>
          <p>{taskItem.task.text}</p>
          <input
            id="check"
            type="checkbox"
            value={taskItem.check}
            onChange={() => checkChange(taskItem.id)}
          />
          <label htmlFor="check">Check-status</label>
          <p className={styles.date}>[ created at: {taskItem.dated} ]</p>
          <NavLink
            to={{
              pathname: "/modal",
              state: { task: taskItem },
            }}
          >
            <button className={styles.button}>Edit</button>
            {/* <ModalContent taskItem={taskItem} /> */}
          </NavLink>
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
};
