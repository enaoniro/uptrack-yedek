import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import Table from "react-bootstrap/Table";
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
  // const [ task, setTask ] = useState({})
  // const [ target, setTarget ] = useState({})
  // const [ record, setRecord ] = useState({})
  let { id } = useParams();
  console.log("single student rendered")

  const navigate = useNavigate()

  const {
    studentList,
    getStudentById,
    setStudent,
    deleteStudent,
    updateStudent,
    isOpen,
    setIsOpen,
  } = useContext(StudentContext);

  const student = studentList.find((student) => student.id == id);
  console.log(student)
  const { groupList } = useContext(GroupContext);

  const { taskList } = useContext(TaskContext);
  console.log(taskList);
  const { targetList } = useContext(TargetContext);
  console.log(targetList);
  const { recordList } = useContext(RecordContext);
  console.log(recordList)

  const task = taskList.find((task) => task?.StudentId === student.id);
  console.log(task || "no tasks");
  const target = targetList.find((target) => target?.TaskId === task?.id);
  console.log(target ?? "no targets");
  const record = recordList.find((record) => record?.TargetId === target?.id);
  console.log(record ?? "no records");

  return (
    <Container fluid className=" mt-5 p-3">
      <Table bordered className="bg-light">
        <thead className="bg-white">
          <tr>
            <th>student details</th>
            <th>task1</th>
            <th>task2</th>
            <th>task3</th>
            <th>task4</th>
            <th>task5</th>
            <th className="bg-primary text-light opacity-75">actions</th>
          </tr>
        </thead>

        <tbody>
          <tr key={student.id}>
            <td className="text-capitalize text-secondary  bg-body fw-bolder text-start ">
              <span className="text-black">name :</span> {student.first_name}{" "}
              {student.last_name}
              <br></br>
              <span className="text-black">email     :</span> {student.email}
              <br></br>
              <span className="text-black">groupId   :{student.GroupId}</span>
              <br></br>
              <span className="text-black">Studentid :{student.id}</span>
              <br></br>
              <span className="text-black">Taskid    :{task?.id}</span>
              <br></br>
              <span className="text-black">Targetid  :{target?.id}</span>
              {/* {groupList
          .filter((group) => group.id == student.GroupId)
          .map((group) => group.name)}
          <br></br> */}
            </td>
            <td className="">
              <p className={(target?.task1 <= record?.task1 ) ? " bg-secondary text-dark bg-opacity-25 " : "bg-danger text-light border border-dark"}>
                {task?.task1}
              </p>
              <p className=" border border-info d-flex justify-content-between px-1 py-1">
                goal:
                <mark className="border">
                  <span className=" w-30 bg-light m-0 mx-3 text-danger fw-bold">
                    {target?.task1}
                  </span>
                </mark>
              </p>
              <p className=" border border-warning d-flex justify-content-between px-1 py-1">
                achieved:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {record?.task1}
                  </span>
                </mark>
              </p>
            </td>
            <td>
              <p className={(target?.task2 <= record?.task2 ) ? " bg-secondary text-dark bg-opacity-25 " : "bg-danger text-light border border-dark"}>
                {task?.task2}
              </p>
              <p className="border border-info d-flex justify-content-between px-1 py-1">
                goal:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {target?.task2}
                  </span>
                </mark>
              </p>

              <p className="border border-warning d-flex justify-content-between px-1 py-1">
                achieved:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {record?.task2}
                  </span>
                </mark>
              </p>
            </td>

            <td>
              <p className={(target?.task3 <= record?.task3 ) ? " bg-secondary text-dark bg-opacity-25 " : "bg-danger text-light border border-dark"}>
                {task?.task3}
              </p>
              <p className="border border-info d-flex justify-content-between px-1 py-1">
                goal:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {target?.task3}
                  </span>
                </mark>
              </p>

              <p className="border border-warning d-flex justify-content-between px-1 py-1">
                achieved:
                <mark className="border">
                  <span className="w-30 m-0 text-danger fw-bold mx-3">
                    {record?.task3}
                  </span>
                </mark>
              </p>
            </td>

            <td>
              <p className={(target?.task4 <= record?.task4 ) ? " bg-secondary text-dark bg-opacity-25 " : "bg-danger text-light border border-dark"}>
                {task?.task4}
              </p>
              <p className="border border-info d-flex justify-content-between px-1 py-1">
                goal:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {target?.task4}
                  </span>
                </mark>
              </p>

              <p className="border border-warning d-flex justify-content-between px-1 py-1">
                achieved:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {record?.task4}
                  </span>
                </mark>
              </p>
            </td>

            <td>
              <p className={(target?.task5 <= record?.task5 ) ? "bg-secondary text-dark bg-opacity-25" : "bg-danger text-light border border-dark"} >
                {task?.task5}
              </p>
              <p className="border border-info d-flex justify-content-between px-1 py-1 ">
                <span>goal:</span>
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3 ">
                    {target?.task5}
                  </span>
                </mark>
              </p>

              <p className="border border-warning d-flex justify-content-between px-1 py-1">
                achieved:
                <mark className="border">
                  <span className=" w-30 m-0 text-danger fw-bold mx-3">
                    {record?.task5}
                  </span>
                </mark>
              </p>
            </td>

            <td className="d-flex flex-column m-0">
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
                onClick={() => deleteStudent(id) }
                className="btn btn-outline-danger opacity-75 w-20"
              >
                Delete student
              </button>
            </td>

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
              <AddTarget target={target} />
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
              <AddRecord record={record} />
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
        </tbody>
      </Table>
    </Container>
  );
};

export default SingleStudent;
