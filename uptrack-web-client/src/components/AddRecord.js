import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecordContext } from "../contexts/RecordContext";
import SingleStudent from "./SingleStudent";

const AddRecord = ({task}) => {
  const [record, setRecord] = useState({});
  const [recordList, setRecordList] = useState([]);
  const [ navigate,setNavigate] = useState();

  const { addRecord, getRecordList } = useContext(RecordContext);
  

  useEffect(() => {
    getRecordList();
  }, []);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  console.log(record)
  const id = task?.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(record, id);
    setRecordList();
    
    };

  
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            add record
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
                value={record?.task1 || ""}
                onChange={handleChange}
              />
              <h6>task-2</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task2"
                name="task2"
                value={record?.task2 || ""}
                onChange={handleChange}
              />
              <h6>task-3</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task3"
                name="task3"
                value={record?.task3 || ""}
                onChange={handleChange}
              />
              <h6>task-4</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task4"
                name="task4"
                value={record?.task4 || ""}
                onChange={handleChange}
              />
              <h6>task-5</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task5"
                name="task5"
                value={record?.task5 || ""}
                onChange={handleChange}
              /> 
             {/* <h6>TaskId</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="taskid"
                name="TaskId"
                value={record?.TaskId || ""}
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
