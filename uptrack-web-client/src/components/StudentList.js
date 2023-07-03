import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
import Student from "./Student";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";

const StudentList = ({showDetails, setShowDetails, group }) => {
  console.log(group);
 

  console.log("student list is rendered");

  const {
    studentsInGroup,
    setStudentsInGroup,
    getStudentsInGroup,
    studentList,
  } = useContext(StudentContext);
  const { groupList } = useContext(GroupContext);
  console.log(studentList);

  const groupStudents = studentList?.filter(
  (student) => student?.GroupId === group?.id );
  console.log(groupStudents);
  if (!groupStudents) {
    alert("no groupStudents exists!");
  }
  // let id  = groupStudents.id ;
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-white shadow-lg ">
      {/* <Container fluid className="mt-10 p-3 bg-white shadow-lg"> */}
      <Table className="m-3 bg-white table-responsive-xl" bordered hover>
        <thead>
          <tr className=" opacity-75 border-3 " style={{ hover: "red" }}>
            <th className="text-black">number</th>
            <th className="text-black">Student name</th>
            <th className="text-black" rowSpan={2}>
              last name
            </th>
            <th className="text-black" rowSpan={2}>
              email
            </th>
            <th className="text-black" rowSpan={2}>
              group
            </th>
            <th className="text-black" rowSpan={2}>
              id
            </th>
            {/* <th className="text-black" rowSpan={2}>
              class
            </th> */}
            {/* <th className="text-black" rowSpan={2}></th> */}
          </tr>
        </thead>
        <tbody className="">
          {groupStudents?.map((student, index) => (
            <tr
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                navigate(`/students/student/${student.id}`);
              }}
            >
              <td>{index + 1}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.GroupId}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>number of students: {groupStudents.length}</td>
          </tr>
        </tfoot>
      </Table>
      {/* </Container> */}
    </div>
  );
};

export default StudentList;
