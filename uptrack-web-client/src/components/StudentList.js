import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GrupContext } from "../contexts/GrupContext";
import Student from "./Student";
import SingleStudent from "./SingleStudent";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";

const StudentList = ({ showDetails, setShowDetails, grup }) => {
  const [singleStudent, setSingleStudent] = useState("");

  console.log(grup);

  console.log("student list is rendered");

  const {
    studentsInGrup,
    setStudentsInGrup,
    getStudentsInGrup,
    studentList,
    setStudent,
    student,
  } = useContext(StudentContext);
  const { grupList } = useContext(GrupContext);
  console.log(studentList);

  const grupStudents = grup.Students; //studentList?.filter(
  // (student) => student?.GrupId === grup?.id );
  console.log(grupStudents);
  if (!grupStudents) {
    alert("no grupStudents exists!");
  }
  // let id  = grupStudents.id ;
  const navigate = useNavigate();

  // const setStudent= (e) => {
  //   e.preventDefault();

  // }

  return (
    <div className="container-fluid bg-white shadow-lg ">
      <Table className="bg-white table-responsive-sm mt-3" bordered hover>
        <thead>
          <tr className=" opacity-75 border-3 " style={{ hover: "red" }}>
            <th className="text-black">no</th>
            <th className="text-black">Student name</th>
            <th className="text-black" rowSpan={2}>
              last name
            </th>
            <th className="text-black" rowSpan={2}>
              email
            </th>
            <th className="text-black" rowSpan={2}>
              grup
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
          {grupStudents?.map((student, index) => (
            <tr
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                navigate(`/students/${student.id}`);
                //   setSingleStudent(e.target.value)
              }}
            >
              <td>{index + 1}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.GrupId}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>number of students: {grup.Students.length}</td>
          </tr>
        </tfoot>
      </Table>
      {/* <SingleStudent id={singleStudent} /> */}

      {/* </Container> */}
    </div>
  );
};

export default StudentList;
