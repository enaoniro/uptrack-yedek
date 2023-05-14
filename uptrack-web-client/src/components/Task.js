import React, { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import UpdateTask from "./AddTask";
import Table from "react-bootstrap/Table";

const Task = ({ task }) => {
  const { updateTask } = useContext(TaskContext);

  return (
    <React.Fragment>
      <tr>
        <td>
          <button
            // onClick={() => deleteTask(task.id)}
            className="btn btn-outline-danger w-75"
          >
            Delete student
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTaskModal" + task.id}
          >
            Edit Task
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTaskModal" + task.id}
          >
            update task
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTaskModal" + task.id}
          >
            update target
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateTaskModal" + task.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTask task={task} />
      </div>
    </React.Fragment>
  );
};

export default Task;
