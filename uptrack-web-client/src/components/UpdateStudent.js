import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";

const UpdateStudent = ({ student }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);
  const { updateStudent } = useContext(StudentContext);

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(updatedStudent);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Student
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
              <h6>first name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="Student Name"
                name="first_name"
                value={updatedStudent.first_name}
                onChange={handleChange}
              />
              <h6>last name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="last_name"
                name="last_name"
                value={updatedStudent.last_name}
                onChange={handleChange}
              />
              <h5>email</h5>
              <input
                type="email"
                className="form-control bg-info"
                placeholder="email"
                name="email"
                value={updatedStudent.email}
                onChange={handleChange}
              />
              <h6>group no</h6>
              <input
                type="number"
                className="form-control bg-info"
                name="GroupId"
                value={updatedStudent.GroupId}
                onChange={handleChange}
              />
              <h6>task no</h6>
              <input
                type="number"
                className="form-control bg-info"
                name="TaskId"
                value={updatedStudent.TaskId}
                onChange={handleChange}
              />
              <h6>target no</h6>
              <input
                type="number"
                className="form-control bg-info"
                name="TargetId"
                value={updatedStudent.TargetId}
                onChange={handleChange}
              />
              <h6>record no</h6>
              <input
                type="number"
                className="form-control bg-info"
                name="RecordId"
                value={updatedStudent.RecordId}
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
