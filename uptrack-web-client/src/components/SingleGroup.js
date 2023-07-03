import React, { useContext, useState } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import { useParams, useNavigate } from "react-router-dom";
import { GroupContext } from "../contexts/GroupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGroup from "./UpdateGroup";
import Student from "./Student";
import SingleStudent from "./SingleStudent";
import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/Container";
import StudentList from "./StudentList";

const SingleGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupStudents, setGroupStudents] = useState([]);
  const [groupName, setGroupName] = useState("");

  const { groupList, deleteGroup } = useContext(GroupContext);
  const { studentList, setStudentList } = useContext(StudentContext);
  console.log(groupList);

  const navigate = useNavigate();

  let { id } = useParams();
  const group = groupList.find((group) => group.id == id);
  console.log(group);

  const handleClick = () => {
    // setGroupStudents(
    //   studentList.find((student) => student.GroupId === group.id)
    // );
    setIsOpen(!isOpen);
  };
  console.log(groupStudents);
  return (
    // <React.Fragment key={group.id}>
    <>
      <div className="container-fluid mt-10 bg-white">
        <Table className="w-85 p-3" >
          {/* <thead className="p-3">
          <tr>
            <th className="w-50 h-100 opacity-75">Group name</th>
          </tr>
        </thead> */}
          <tbody>
            <tr
              className="w-100 d-flex text-primary bg-body"
            >
              {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" key={group.id}> </td> */}
              <td
                className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder"
                // colSpan={2}
                onClick={handleClick}
              >
                {/* <a className="text-decoration-none" href="http://localhost:3000/group" >{group.name}</a>  */}
                {group.id}-{group.leader} group
              </td>
              {/* <td colSpan={2} className="text-capitalize text-primary bg-body fw-bolder text-center">{group.leader}</td> */}
              {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{group.Canton.name}</td> */}

              <td>
                <button
                  type="button"
                  className="w-100 btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#updateGroupModal" + group.id}
                >
                  update Group
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteGroup(id)}
                  className="w-100 btn btn-danger opacity-75 "
                >
                  Delete Group
                </button>
              </td>
            <td
              className="modal fade"
              id={"updateGroupModal" + group.id}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <UpdateGroup group={group} />
            </td>
            </tr>

          </tbody>
        </Table>
   
        <StudentList group={group} />
      </div>
   
    </>

    
  );
};

export default SingleGroup;
