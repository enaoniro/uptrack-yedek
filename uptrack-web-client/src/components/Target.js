import React, { useState, useContext } from "react";
import { TargetContext } from "../contexts/TargetContext";
import UpdateTarget from "./UpdateTarget";
import Table from "react-bootstrap/Table";

const Target = ({ target }) => {
  // const { deleteStudent } = useContext(StudentContext);
  const { updateTarget } = useContext(TargetContext);

  return (
    <React.Fragment>
      <tr>
        <td>
          <button
            // onClick={() => deleteTarget(Target.id)}
            className="btn btn-outline-danger w-75"
          >
            Delete student
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTargetModal" + target.id}
          >
            Edit Target
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTargetModal" + target.id}
          >
            update Target
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateTargetModal" + target.id}
          >
            update target
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateTargetModal" + target.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTarget target={target} />
      </div>
    </React.Fragment>
  );
};

export default Target;
