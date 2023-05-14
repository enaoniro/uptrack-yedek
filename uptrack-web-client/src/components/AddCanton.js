import React, { useContext, useEffect, useState } from "react";
import { CantonContext } from "../contexts/CantonContext.js";

const AddCanton = () => {
  const [canton, setCanton] = useState({});
  const [cantonList, setCantonList] = useState([]);

  const { addCanton, getCantonList, isOpen, setIsOpen } = useContext(
    CantonContext
  );

  useEffect(() => {
    getCantonList();
  }, []);

  const handleOnChange = (e) => {
    setCanton({ ...canton, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCanton(canton);
    // setCantonList();

    // setIsOpen(false);
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Canton
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
              <h6 color="blue">canton bilgilerini giriniz</h6>

              <input
                type="text"
                className="form-control"
                name="name"
                value={canton.name || ""}
                placeholder="name"
                onChange={handleOnChange}
              />
              <input
                type="email"
                className="form-control"
                name="email"
                value={canton.email || ""}
                placeholder="email"
                onChange={handleOnChange}
              />
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={hideForm}
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCanton;
