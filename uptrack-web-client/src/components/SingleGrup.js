import React, { useContext, useState } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import { useParams, useNavigate } from "react-router-dom";
import { GrupContext } from "../contexts/GrupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGrup from "./UpdateGrup";
import Student from "./Student";
import SingleStudent from "./SingleStudent";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/Container";
import StudentList from "./StudentList";

const SingleGrup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grupStudents, setGrupStudents] = useState([]);
  const [grupName, setGrupName] = useState("");

  const { grupList, deleteGrup } = useContext(GrupContext);
  const { studentList, setStudentList } = useContext(StudentContext);
  console.log(grupList);

  const navigate = useNavigate();

  let { id } = useParams();
  const grup = grupList.find((grup) => grup.id == id);
  console.log(grup);

  const handleClick = () => {
    // setGrupStudents(
    //   studentList.find((student) => student.GrupId === grup.id)
    // );
    setIsOpen(!isOpen);
  };
  console.log(grupStudents);
  return (
    // <React.Fragment key={grup.id}>
    <>
      <div className="container-fluid mt-10 bg-white">
        <Table className="w-85 p-3">
          {/* <thead className="p-3">
          <tr>
            <th className="w-50 h-100 opacity-75">Grup name</th>
          </tr>
        </thead> */}
          <tbody>
            <tr className="w-100 d-flex text-primary bg-body">
              {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" key={grup.id}> </td> */}
              <td
                className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder"
                // colSpan={2}
                onClick={handleClick}
              >
                {/* <a className="text-decoration-none" href="http://localhost:3000/grup" >{grup.name}</a>  */}
                {grup.id}-{grup.leader} grup
              </td>
              {/* <td colSpan={2} className="text-capitalize text-primary bg-body fw-bolder text-center">{grup.leader}</td> */}
              {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{grup.Canton.name}</td> */}

              <td>
                <button
                  type="button"
                  className="w-100 btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#updateGrupModal" + grup.id}
                >
                  update Grup
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteGrup(id)}
                  className="w-100 btn btn-danger opacity-75 "
                >
                  Delete Grup
                </button>
              </td>
              <td
                className="modal fade"
                id={"updateGrupModal" + grup.id}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <UpdateGrup grup={grup} />
              </td>
            </tr>
          </tbody>
        </Table>

        <StudentList grup={grup} />
      </div>
    </>
  );
};

export default SingleGrup;
