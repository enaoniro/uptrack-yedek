import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { GroupContext } from "../contexts/GroupContext.js";
import Form from "react-bootstrap/Form";

const UpdateUser = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [userList, setUserList] = useState([]);

  const { addUser, updateUser, getUserList, isOpen, setIsOpen } =
    useContext(UserContext);

  const handleOnChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser);
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
            update user
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
              <h6 color="blue">user bilgilerini giriniz</h6>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={user.first_name}
                placeholder="first name"
                onChange={handleOnChange}
              />
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={user.last_name}
                placeholder="last name"
                onChange={handleOnChange}
              />
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email}
                placeholder="email"
                onChange={handleOnChange}
              />
              <input
                type="number"
                className="form-control"
                name="RoleId"
                value={user.RoleId}
                placeholder="rolu giriniz"
                onChange={handleOnChange}
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
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
