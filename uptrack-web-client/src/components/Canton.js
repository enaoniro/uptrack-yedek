import React, { useState, useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GrupContext } from "../contexts/GrupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Grup from "./Grup.js";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Canton = ({ canton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cantonGrups, setCantonGrups] = useState([]);
  console.log(canton);

  let { id } = useParams();
  // const canton = cantonList.find(canton => canton.id == id)
  // console.log(canton)

  const { cantonList, deleteCanton } = useContext(CantonContext);
  const { grupList } = useContext(GrupContext);
  // const grups = grupList.find((grup) => grup.CantonId == id);
  // console.log(grups)

  const grups = canton.Grups;

  const navigate = useNavigate();

  const handleClick = () => {
    // setGrupName(event.target.innerText);
    setCantonGrups(grupList.filter((grup) => grup.CantonId == canton.id));
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
              <th>grup id</th>
              <th>grup name</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {grups.map((grup) => (
              <Grup grup={grup} key={grup.id} />
            ))}
          </tbody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default Canton;
