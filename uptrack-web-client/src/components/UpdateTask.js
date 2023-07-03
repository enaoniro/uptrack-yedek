import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext.js";

const UpdateTask = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useContext(TaskContext);

  console.log(task || "no task");

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateTask(updatedTask);
    updateTask(updatedTask);
    console.log(updatedTask)
  };
 
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            update Task
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div>
            <h6>task-1</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task-1"
                name="task1"
                value={updatedTask?.task1 || ""}
                onChange={handleChange}
              />
              <h6>task-2</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task-2"
                name="task2"
                value={updatedTask?.task2 || ""}
                onChange={handleChange}
              />
              <h6>task-3</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task-3"
                name="task3"
                value={updatedTask?.task3 || ""}
                onChange={handleChange}
              />
              <h6>task-4</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task-4"
                name="task4"
                value={updatedTask?.task4 || ""}
                onChange={handleChange}
              />
              <h6>task-5</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task-5"
                name="task5"
                value={updatedTask?.task5 || "" }
                onChange={handleChange}
              />
            
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
