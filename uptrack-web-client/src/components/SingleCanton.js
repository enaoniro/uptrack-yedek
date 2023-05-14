import React, { useState, useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GroupContext } from "../contexts/GroupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Group from "./Group.js";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function SingleCanton() {
  const [isOpen, setIsOpen] = useState(false);
  const [cantonGroups, setCantonGroups] = useState([]);
  const { cantonList, deleteCanton } = useContext(CantonContext);

  let { id } = useParams();
  const canton = cantonList.find((canton) => canton.id == id);
  console.log(canton);

  const { groupList } = useContext(GroupContext);
  //   const groups = groupList.find((group)=> group.CantonId == id)
  //   console.log(groups)

  const navigate = useNavigate();

  const handleClick = () => {
    // setGroupName(event.target.innerText);
    setCantonGroups(groupList.filter((group) => group.CantonId == canton.id));
    setIsOpen(!isOpen);
  };

  const groups = cantonGroups.map((group) => (
    <Group group={group} key={group.id} />
  ))

  return (
    <React.Fragment key={canton.id}>
      {!isOpen ? (
        <div className="container-fluid p-3">
          <Table className="w-100 p-3" bordered hover>
            <thead className="p-3">
              <tr>
                <th className="w-50 h-100 opacity-75">Canton name</th>
                <th className="w-25 h-100  opacity-75">Canton Manager</th>
              </tr>
            </thead>
            <tbody>
            <tr className="w-100">
              <td
                style={{cursor:"pointer"}}
                className="opacity-75 text-capitalize py-5 text-primary fw-bolder "
                onClick={handleClick}
              >
                <span>{canton.name}</span>
              </td>
              <td className="text-capitalize fw-bolder text-center py-5 ">
                <span>{canton.email}</span>
              </td>
              <td>
                <button
                  type="button"
                  className="py-3 opacity-75 w-100 btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#updateCantonModal" + canton.id}
                >
                  Edit Canton
                </button>
                <button
                  onClick={() => deleteCanton(canton.id)}
                  className="py-3 btn w-100 btn-danger opacity-75 "
                >
                  Delete Canton
                </button>
              </td>
            </tr>
            <tr
              className="modal fade"
              id={"updateCantonModal" + canton.id}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <UpdateCanton canton={canton} />
            </tr>
            </tbody>
          </Table>
          </div>
        
      ) : (
        <div className="container-fluid p-3">
        <Table bordered hover className="w-100 p-3">
          <thead>
            <tr>
              <th>{canton.name} groups</th>
              {/* <th>group name</th>
              <th>actions</th> */}
            </tr>
          </thead>
          <tbody>
            {groups}
            
          {/* {cantonGroups.map((group) => (
            <Group group={group} key={group.id} />
          ))} */}
          </tbody>
        </Table>
        </div>
        
      )
      }
    </React.Fragment>
  )
}

export default SingleCanton;
