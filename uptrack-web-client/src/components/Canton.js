import React, { useState, useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GroupContext } from "../contexts/GroupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Group from "./Group.js";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Canton = ({ canton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cantonGroups, setCantonGroups] = useState([]);
  console.log(canton);

  let { id } = useParams();
  // const canton = cantonList.find(canton => canton.id == id)
  // console.log(canton)

  const { cantonList, deleteCanton } = useContext(CantonContext);
  const { groupList } = useContext(GroupContext);
  // const groups = groupList.find((group) => group.CantonId == id);
  // console.log(groups)

  const groups = canton.Groups;

  const navigate = useNavigate();

  const handleClick = () => {
    // setGroupName(event.target.innerText);
    setCantonGroups(groupList.filter((group) => group.CantonId == canton.id));
    // setIsOpen(!isOpen);
    navigate(`/canton/${canton.id}`);
  };

  return (
    <React.Fragment key={canton.id}>
      {!isOpen ? (
        <>
          <tr className="w-100 p-3 bg-white" onClick={handleClick}>
            <td
              style={{ cursor: "pointer" }}
              className="opacity-75 text-capitalize py-5 bg-white text-primary fw-bolder "
            
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
        </>
      ) : (
        <Table bordered hover className="w-100 bg-white">
          <thead>
            <tr>
              <th>group id</th>
              <th>group name</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Group group={group} key={group.id} />
            ))}
          </tbody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default Canton;
