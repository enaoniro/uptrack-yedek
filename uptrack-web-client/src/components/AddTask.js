import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext.js";
import { useParams } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);

let { id } = useParams();

  const { updateTask, addTask, getTaskList } = useContext(TaskContext);

  useEffect(() => {
    getTaskList();
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task, id);
    setTaskList();
    // getTaskList();
    setTask("")
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            add Task
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
                placeholder="task1"
                name="task1"
                value={task?.task1 || ""}
                onChange={handleChange}
              />
              <h6>task-2</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task2"
                name="task2"
                value={task?.task2 || ""}
                onChange={handleChange}
              />
              <h6>task-3</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task3"
                name="task3"
                value={task?.task3 || ""}
                onChange={handleChange}
              />
              <h6>task-4</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task4"
                name="task4"
                value={task?.task4 || ""}
                onChange={handleChange}
              />
              <h6>task-5</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task5"
                name="task5"
                value={task?.task5 || ""}
                onChange={handleChange}
              />
               {/* <h6>studentid</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="studentid"
                name="StudentId"
                value={task?.StudentId || ""}
                onChange={handleChange}
              /> */}
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
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
