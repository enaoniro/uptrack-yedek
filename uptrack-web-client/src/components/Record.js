import React, { useState, useContext } from "react";
import { RecordContext } from "../contexts/RecordContext";
import UpdateRecord from "./UpdateRecord";
import Table from "react-bootstrap/Table";

const Record = ({ record }) => {
  // const { deleteStudent } = useContext(StudentContext);
  const { updateRecord } = useContext(RecordContext);

  return (
    <React.Fragment>
      <tr>
        <td>
          <button
            // onClick={() => deleteRecord(record.id)}
            className="btn btn-outline-danger w-75"
          >
            Delete student
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateRecordModal" + record.id}
          >
            Edit Record
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateRecordModal" + record.id}
          >
            update Record
          </button>
          <button
            type="button"
            className="btn btn-outline-primary w-75 "
            data-bs-toggle="modal"
            data-bs-target={"#updateRecordModal" + record.id}
          >
            update target
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateRecordModal" + record.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateRecord record={record} />
      </div>
    </React.Fragment>
  );
};

export default Record;
