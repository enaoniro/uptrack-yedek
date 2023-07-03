import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import { GroupContext } from "../contexts/GroupContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import { TaskContext } from "../contexts/TaskContext";
import UpdateStudent from "./UpdateStudent";
import AddTask from "./AddTask.js";
import AddTarget from "./AddTarget.js";
import UpdateTarget from "./UpdateTarget.js";
import UpdateRecord from "./UpdateRecord.js";
import UpdateTask from "./UpdateTask";
import AddRecord from "./AddRecord";

const SingleStudent = () => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  console.log(tasksCompleted);
  // const [ record, setRecord ] = useState({})
  // console.log("single student rendered");
  
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
  logout({
    returnTo: window.location.origin,
  });
  
  let { id } = useParams();
  const navigate = useNavigate();

  const {
    studentList,
    getStudentById,
    setStudent,
    deleteStudent,
    updateStudent,
    isOpen,
    setIsOpen,
  } = useContext(StudentContext);

  const { groupList } = useContext(GroupContext);

  const student = studentList.find((student) => student.id == id);
  console.log(student);

  const { taskList, setTaskList, getTaskList, setTaskCompleted } = useContext(
    TaskContext
  );
  console.log(taskList);
  const { targetList } = useContext(TargetContext);
  console.log(targetList);
  const { recordList } = useContext(RecordContext);
  console.log(recordList);

  const task = taskList?.find(
    (task) => task?.StudentId === student?.id && task?.isCompleted === false
  );
  console.log(task || "no tasks");
  const target = targetList.find((target) => target?.TaskId === task?.id); //.sort((targetLast, targetPrevious) => targetLast.id - targetPrevious.id);
  console.log(target ?? "no targets");
  const record = recordList.find((record) => record?.TaskId === task?.id);
  console.log(record ?? "no records");


  const setTaskEnd = (task) => {
    console.log(task?.isCompleted);
    task.isCompleted = !task.isCompleted;
    setTaskCompleted(task);
    setTaskList();
    
  };

  const handleClick = () => {
    // getTaskList();

    setTasksCompleted(taskList.filter((task) => task.isCompleted === true));
    console.log(tasksCompleted);
    setShowCompletedTasks(!showCompletedTasks);
  };
  // console.log(student.Tasks.filter((task) => task.isCompleted === true));

  return (
    <>
      <div id="main">
        <div className="container-fluid d-flex flex-column justify-content-center">
          <header
            className="w-100 navbar navbar-expand-lg shadow-sm bg-white mb-3 p-3"
            id="header"
          >
            {/* <a
              href="/"
              className="d-flex align-items-center text-primary text-decoration-none"
            >
              <span className="fs-5">uptrack</span>
            </a> */}
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
                <li className="nav-item text-align-center">
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
            <div className="row ">
              <div className="col-lg-1 text-primary p-3 mt-2" id="listebox">
                <div className="d-flex flex-column m-0 text-align-center justify-content-center">
                  {/* <div className="w-100 text-align-center"> */}
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateStudentModal" + student.id}
                  >
                    Edit student
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20 "
                    data-bs-toggle="modal"
                    data-bs-target={"#addTaskModal" + task?.id}
                  >
                    add task
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20 "
                    data-bs-toggle="modal"
                    data-bs-target={"#updateTaskModal" + task?.id}
                  >
                    update task
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20 "
                    data-bs-toggle="modal"
                    data-bs-target={"#addTargetModal" + target?.id}
                  >
                    add target
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateTargetModal" + target?.id}
                  >
                    update target
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20 "
                    data-bs-toggle="modal"
                    data-bs-target={"#addRecordModal" + record?.id}
                  >
                    add record
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateRecordModal" + record?.id}
                  >
                    update record
                  </button>
                  <button
                    // disabled
                    onClick={() => deleteStudent(id)}
                    className="btn btn-outline-danger opacity-75 w-20"
                  >
                    Delete student
                  </button>
                  <button
                    onClick={() => handleClick()}
                    className="btn btn-primary opacity-75 w-20"
                  >
                    Completed Tasks
                  </button>
                </div>
              </div>
              <div className="col-lg-10 bg-white mt-2" id="details-div">
                {/* <Container fluid className="w-75 mt-5 bg-white"> */}
                <Table
                  bordered
                  className="bg-white shadow-lg mt-3 table-responsive"
                >
                  <thead className="bg-white">
                    <tr>
                      <th>student details</th>
                      <th>task1</th>
                      <th>task2</th>
                      <th>task3</th>
                      <th>task4</th>
                      <th>task5</th>
                      {/* <th className="bg-primary text-light opacity-75">actions</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    <tr key={student.id}>
                      <td className="text-capitalize text-center text-secondary bg-white fw-bolder text-start ">
                        <span className="d-block">
                          <img
                            style={{ width: "100%" }}
                            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg"
                            //"https://via.placeholder.com/150"
                          />
                        </span>
                        <p className="d-flex justify-content-around">
                          <span className="text-black align-content-md-between">
                            name :
                          </span>
                          <span>
                            {student.first_name} {student.last_name}
                          </span>
                        </p>
                        <br></br>
                        <span className=" text-black">
                          email : {student.email}
                        </span>
                        <br></br>
                        <span className="text-black">
                          groupId :{student.GroupId}
                        </span>
                        <br></br>
                        <span className="text-black">
                          Studentid :{student.id}
                        </span>
                        <br></br>
                        <span className="text-black">Taskid :{task?.id}</span>
                        <br></br>
                        {/* <span className="text-black">Targetid :{target?.id}</span> */}
                      </td>

                      <td className="">
                        <p
                          className={
                            target?.task1 <= record?.task1
                              ? " bg-secondary text-dark bg-opacity-25 "
                              : "bg-danger text-light "
                          }
                        >
                          {task?.task1}
                        </p>
                        <p className=" border border-info d-flex justify-content-between px-1 py-1">
                          target:
                          <mark className="border">
                            <span className=" w-30 bg-light m-0 mx-3 text-danger fw-bold">
                              {target?.task1}
                            </span>
                          </mark>
                        </p>
                        <p className=" border border-warning d-flex justify-content-between px-1 py-1">
                          record:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {record?.task1}
                            </span>
                          </mark>
                        </p>
                      </td>
                      <td>
                        <p
                          className={
                            target?.task2 <= record?.task2
                              ? " bg-secondary text-dark bg-opacity-25 "
                              : "bg-danger text-light "
                          }
                        >
                          {task?.task2}
                        </p>
                        <p className="border border-info d-flex justify-content-between px-1 py-1">
                          target:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {target?.task2}
                            </span>
                          </mark>
                        </p>

                        <p className="border border-warning d-flex justify-content-between px-1 py-1">
                          record:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {record?.task2}
                            </span>
                          </mark>
                        </p>
                      </td>

                      <td>
                        <p
                          className={
                            target?.task3 <= record?.task3
                              ? " bg-secondary text-dark bg-opacity-25 "
                              : "bg-danger text-light "
                          }
                        >
                          {task?.task3}
                        </p>
                        <p className="border border-info d-flex justify-content-between px-1 py-1">
                          target:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {target?.task3}
                            </span>
                          </mark>
                        </p>

                        <p className="border border-warning d-flex justify-content-between px-1 py-1">
                          record:
                          <mark className="border">
                            <span className="w-30 m-0 text-danger fw-bold mx-3">
                              {record?.task3}
                            </span>
                          </mark>
                        </p>
                      </td>

                      <td>
                        <p
                          className={
                            target?.task4 <= record?.task4
                              ? " bg-secondary text-dark bg-opacity-25 "
                              : "bg-danger text-light "
                          }
                        >
                          {task?.task4}
                        </p>
                        <p className="border border-info d-flex justify-content-between px-1 py-1">
                          target:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {target?.task4}
                            </span>
                          </mark>
                        </p>

                        <p className="border border-warning d-flex justify-content-between px-1 py-1">
                          record:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {record?.task4}
                            </span>
                          </mark>
                        </p>
                      </td>

                      <td>
                        <p
                          className={
                            target?.task5 <= record?.task5
                              ? "bg-secondary text-dark bg-opacity-25"
                              : "bg-danger text-light "
                          }
                        >
                          {task?.task5}
                        </p>
                        <p className="border border-info d-flex justify-content-between px-1 py-1 ">
                          <span>target:</span>
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3 ">
                              {target?.task5}
                            </span>
                          </mark>
                        </p>

                        <p className="border border-warning d-flex justify-content-between px-1 py-1">
                          record:
                          <mark className="border">
                            <span className=" w-30 m-0 text-danger fw-bold mx-3">
                              {record?.task5}
                            </span>
                          </mark>
                        </p>
                      </td>
                      {/* <td>
                        <button
                          onClick={() => setTaskEnd(task)}
                          className="btn btn-secondary opacity-75 w-100"
                        >
                          mark task as completed
                        </button>
                      </td> */}

                      <td
                        className="modal fade"
                        id={"updateStudentModal" + student.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <UpdateStudent student={student} />
                      </td>

                      <td
                        className="modal fade"
                        id={"addTaskModal" + task?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <AddTask task={task} />
                      </td>
                      <td
                        className="modal fade"
                        id={"updateTaskModal" + task?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <UpdateTask task={task} />
                      </td>
                      <td
                        className="modal fade"
                        id={"addTargetModal" + target?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <AddTarget target={target} task={task} />
                      </td>
                      <td
                        className="modal fade"
                        id={"updateTargetModal" + target?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <UpdateTarget target={target} />
                      </td>
                      <td
                        className="modal fade"
                        id={"addRecordModal" + record?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <AddRecord record={record} task={task} />
                      </td>
                      <td
                        className="modal fade"
                        id={"updateRecordModal" + record?.id}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <UpdateRecord record={record} />
                      </td>
                    </tr>
                    <tr
                      className="w-50 mb-3 text-primary opacity-75"
                      onClick={() => setTaskEnd(task)}
                    >
                      <td className="" colSpan={6}>
                        {task ? (
                          <button className="w-100 btn btn-primary m-auto">
                            mark task as completed
                          </button>
                        ) : (
                          <p className="bg-danger text-white">
                            no current task to display
                          </p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>

                {showCompletedTasks && (
                  <>
                    <div className="w-100 mt-5 shadow-lg" id="recent">
                      <div className="bg-danger opacity-50 d-flex justify-content-center text-red align-items-center">
                        <p
                          onClick={handleClick}
                          className="d-flex justify-content-center align-items-center text-white text-center fw-bold "
                          style={{ cursor: "pointer" }}
                        >
                          <span className="text-center ">Completed Tasks</span>
                        </p>
                      </div>
                    </div>
                    <Table
                      bordered
                      className="opacity-75 mb-3 shadow-lg recent-table"
                    >
                      <thead className="bg-white">
                        <tr>
                          {/* <th>student tasks</th> */}
                          <th className="col-1">task no</th>
                          <th>task1</th>
                          <th>task2</th>
                          <th>task3</th>
                          <th>task4</th>
                          <th>task5</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasksCompleted.sort(
                          (firstItem, secondItem) =>
                            secondItem.id - firstItem.id
                        )
                          .filter((task) => task.StudentId === student.id)
                          .map((task) => (
                            <tr
                              key={task.id}
                              className="bg-white bg-opacity-25 "
                            >
                              <td className="fw-bolder">{task.id}</td>
                              <td>
                                {task.task1}
                                <br></br>
                                <p>{target?.task1}</p>
                              </td>
                              <td>{task.task2}</td>
                              <td>{task.task3}</td>
                              <td>{task.task4}</td>
                              <td>{task.task5}</td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStudent;
