import React, { useContext, useState } from "react";
import { GroupContext } from "../contexts/GroupContext";

const UpdateGroup = ({ group }) => {
  const [updatedGroup, setUpdatedGroup] = useState(group);
  const { updateGroup, setGroupList } = useContext(GroupContext);
  
  const { getGroupList } = useContext(GroupContext)

  const handleChange = (e) => {
    setUpdatedGroup({ ...updatedGroup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGroup(updatedGroup);
    getGroupList()
  };

  return (
    <>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Group
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
              <h6>Group name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="Group Name"
                name="name"
                value={updatedGroup.name}
                onChange={handleChange}
              />
              <h6>Group Leader</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="group leader"
                name="leader"
                value={updatedGroup.leader}
                onChange={handleChange}
              />
              <h6>canton</h6>
               <input
                type="number"
                className="form-control bg-info"
                placeholder="canton id"
                name="CantonId"
                value={updatedGroup.CantonId}
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

export default UpdateGroup;
