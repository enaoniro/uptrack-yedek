import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from "react-bootstrap/Table";
import AddStudent from "./AddStudent.js";
import Student from "./Student.js";
import { useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext.js";
import { GroupContext } from "../contexts/GroupContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";
import StudentList from "./StudentList.js";

function GroupLeader() {
  const [showDetails, setShowDetails] = useState(false);
  const [ groupStudents, setGroupStudents] = useState([])
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log("group leader is rendered");

  console.log(user);

  const {
    studentList,
    student,
    isOpen,
    setIsOpen,
    setStudentsInGroup,
    studentsInGroup,
    getStudentsInGroup,
  } = useContext(StudentContext);

  const { groupList } = useContext(GroupContext);

  console.log(groupList);

  const group = groupList?.find((group) => group.leader === user.email);
  console.log(group);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  //  const students = groupList.map(group=>group.Students).map(student=>student.GroupId)
  //  console.log(students)

  const handleClick = () => {
    // setGroupStudents(group.Students)
    setShowDetails(!showDetails);
  };

  // const group = studentList.filter((student) => student.GroupId);
  // console.log(groupOneStudent);

  return (
    <div id="main">
      <div className="container-fluid m-0 p-0">
        <header
          className="w-100 navbar navbar-expand-lg shadow-sm bg-white mb-3 p-3"
          id="header"
        >
          <a
            href="/"
            className="d-flex align-items-center text-primary text-decoration-none"
          >
            <span className="fs-5">uptrack</span>
          </a>
          <div className="navbar-collapse offcanvas-collapse">
            <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <span className="fs-5 p-1 text-primary"> | </span>
              </li>

              {/* <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li> */}

              {/* <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li> */}
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  href="http://localhost:3000/group"
                >
                  Group Page
                </a>
              </li>
              {/* <li className="nav-item">
                      <a className="nav-link" href="#">tasks</a>
                    </li> */}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto m-1 mb-lg-0">
                <li>
                  <span className="user-info">
                    {/* <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="40"
                    /> */}
                    <h6 className="d-inline-block p-1 me-1">{user.name} </h6>
                  </span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => logoutWithRedirect()}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="container-fluid bg-white" id="innerdiv">
          <div className="row">
            <div className="col-md-1 text-primary m-1 mt-3" id="listebox">
              <button
                onClick={handleClick}
                // type="button"
                className="btn btn-outline-success fs-6 w-100 mb-2"
                // data-bs-toggle="modal"
                // data-bs-target={"#addStudentModal"}
              >
                add student
              </button>
              <button
                onClick={handleClick}
                // type="button"
                className="btn btn-outline-success fs-6 w-100"
                // data-bs-toggle="modal"
                // data-bs-target={"#addStudentModal"}
              >
                group students
              </button>
            </div>
            <div className="col-md-10 p-1 my-3" id="details-div">
              <div
                id="schweiz"
                className="d-flex shadow-sm align-items-center justify-content-center mb-1"
              >
                <p className="fw-bolder fs-5">Group Name :</p>
                <p className="text-secondary fs-5 fw-bolder">{group?.leader}</p>
              </div>
              <div className="w-90 h-100 m-5" id="form-div">
                {showDetails ? <AddStudent showDetails={showDetails} setShowDetails={setShowDetails} group={group} /> : 
                <StudentList  group={group} />}
              </div>
              {/* <div
                  className="modal fade"
                  id={"addStudentModal"}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <AddStudent />
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupLeader;
