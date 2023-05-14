import React, { useContext, useState } from "react";
import { CantonContext } from "../contexts/CantonContext";

const UpdateCanton = ({ canton }) => {
  const [updatedCanton, setUpdatedCanton] = useState(canton);
  const { updateCanton } = useContext(CantonContext);

  const handleChange = (e) => {
    setUpdatedCanton({ ...updatedCanton, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCanton(updatedCanton);
  };

  return (

    <td>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Canton
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
              <h6>name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="Canton Name"
                name="name"
                value={updatedCanton.name}
                onChange={handleChange}
              />
              <h6>canton manager</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="email"
                name="email"
                value={updatedCanton.email}
                onChange={handleChange}
              />
             

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
            </div>
          </form>
        </div>
      </div>
    </div>
    </td>
  );
};

export default UpdateCanton;
