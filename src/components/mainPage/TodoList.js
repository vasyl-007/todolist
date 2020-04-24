import React from "react";
import styles from "./TodoList.module.css";

export const TodoList = ({ tasks, deleteTask }) => (
  <ul>
    {tasks.map((taskItem) => (
      <li key={taskItem.id} className={styles.task}>
        <h3>{taskItem.task.title}</h3>
        <p>{taskItem.task.text}</p>
        <button>Edit</button>
        <button onClick={() => deleteTask(taskItem.id)}>DELETE</button>
      </li>
    ))}
  </ul>
);
