import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext.js";
import { GrupContext } from "../contexts/GrupContext.js";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AddStudent = ({ showDetails, setShowDetails, grup }) => {
  console.log(grup);

  const id = grup.id;

  const [student, setStudent] = useState({});
  const [studentList, setStudentList] = useState([]);
  // const [showDetails, setShowDetails] = useState(false);
  // const [studentList, setStudentList] = useState([]);

  const { addStudent, getStudentList, isOpen, setIsOpen } = useContext(
    StudentContext
  );

  const navigate = useNavigate();

  useEffect(() => {
    getStudentList();
  }, []);

  const handleOnChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student, id);

    setStudentList((currentList) => {
      return [...studentList, student];
    });

    setShowDetails(!showDetails);
    // getStudentList();
    // setStudentList(newStudentList);
    setStudent("");
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    // <div id="form-container">
    // <div className="modal-dialog">
    //   < className="modal-content">
    //     <div className="modal-header">
    //       <h5 className="modal-title" id="exampleModalLabel">
    //         add student
    //       </h5>
    //       <button
    //         type="button"
    //         className="btn-close"
    //         data-bs-dismiss="modal"
    //         aria-label="Close"
    //       ></button>
    //     </div>

    <div className="w-50 p-5">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div>
          <h6 color="blue">ogrenci bilgilerini giriniz</h6>

          <input
            type="text"
            className="form-control mb-2 bg-light"
            name="first_name"
            value={student.first_name || ""}
            placeholder="first name"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="form-control mb-2 bg-light"
            name="last_name"
            value={student.last_name || ""}
            placeholder="last name"
            onChange={handleOnChange}
          />
          <input
            type="email"
            className="form-control mb-2 bg-light"
            name="email"
            value={student.email || ""}
            placeholder="email"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="form-control mb-2 bg-light"
            name="img"
            value={student.img || ""}
            placeholder="img"
            onChange={handleOnChange}
          />
          {/* <input
            type="number"
            className="form-control mb-2 bg-light"
            name="GrupId"
            value={student.GrupId || ""}
            placeholder="grup no giriniz"
            onChange={handleOnChange}
          /> */}
          {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={hideForm}
              >
                Close
              </button> */}
          <button
            type="submit"
            className="btn btn-primary w-100 opacity-75"
            // data-bs-dismiss="modal"
          >
            Add
          </button>
        </div>
      </form>
    </div>

    // </div>
  );
};

export default AddStudent;
