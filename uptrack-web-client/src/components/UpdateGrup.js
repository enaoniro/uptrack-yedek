import React, { useContext, useState } from "react";
import { GrupContext } from "../contexts/GrupContext";

const UpdateGrup = ({ grup }) => {
  const [updatedGrup, setUpdatedGrup] = useState(grup);
  const { updateGrup, setGrupList } = useContext(GrupContext);

  const { getGrupList } = useContext(GrupContext);

  const handleChange = (e) => {
    setUpdatedGrup({ ...updatedGrup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGrup(updatedGrup);
    getGrupList();
  };

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update Grup
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
                <h6>Grup name</h6>
                <input
                  type="text"
                  className="form-control bg-info"
                  placeholder="Grup Name"
                  name="name"
                  value={updatedGrup.name}
                  onChange={handleChange}
                />
                <h6>Grup Leader</h6>
                <input
                  type="text"
                  className="form-control bg-info"
                  placeholder="grup leader"
                  name="leader"
                  value={updatedGrup.leader}
                  onChange={handleChange}
                />
                <h6>canton</h6>
                <input
                  type="number"
                  className="form-control bg-info"
                  placeholder="canton id"
                  name="CantonId"
                  value={updatedGrup.CantonId}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateGrup;
