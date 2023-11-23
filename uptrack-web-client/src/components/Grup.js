import React, { useState, useContext, useEffect } from "react";
import { GrupContext } from "../contexts/GrupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGrup from "./UpdateGrup";
import Table from "react-bootstrap/Table";
import StudentList from "./StudentList";
import Student from "./Student.js";
import { useNavigate } from "react-router-dom";

const Grup = ({ grup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [grupStudents, setGrupStudents] = useState([]);
  const [grupName, setGrupName] = useState("");
  console.log(grup);

  const { grupList, deleteGrup } = useContext(GrupContext);
  const { studentList, setStudentList } = useContext(StudentContext);

  // console.log(grupStudents);

  const navigate = useNavigate();

  const handleClick = () => {
    setGrupStudents(studentList.find((student) => student.GrupId === grup.id));

    navigate(`/grup/${grup.id}`);
  };

  return (
    <>
      <tr className="w-100 d-flex bg-white" onClick={handleClick} key={grup.id}>
        <td
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/grup" >{grup.name}</a>  */}
          {grup.id}
        </td>
        <td
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/grup" >{grup.name}</a>  */}
          {grup.leader}
        </td>

        <td className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder opacity-75">
          <button
            type="button"
            className="w-100 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#updateGrupModal" + grup.id}
          >
            update Grup
          </button>
          {/* </td>
              <td> */}
          <button
            onClick={() => deleteGrup(grup.id)}
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
    </>
  );
};

export default Grup;
