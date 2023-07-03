import React, { useState, useContext, useEffect } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGroup from "./UpdateGroup";
import Table from "react-bootstrap/Table";
import StudentList from "./StudentList";
import Student from "./Student.js";
import { useNavigate } from "react-router-dom";

const Group = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupStudents, setGroupStudents] = useState([]);
  const [groupName, setGroupName] = useState("");
  console.log(group);

  const { groupList, deleteGroup } = useContext(GroupContext);
  const { studentList, setStudentList } = useContext(StudentContext);

  // console.log(groupStudents);

  const navigate = useNavigate();

  const handleClick = () => {
    setGroupStudents(
      studentList.find((student) => student.GroupId === group.id)
    );

    navigate(`/group/${group.id}`);
  };

  return (
    <>
      <tr className="w-100 d-flex bg-white"  onClick={handleClick} key={group.id}>
        <td
         
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/group" >{group.name}</a>  */}
          {group.id}
        </td>
        <td
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/group" >{group.name}</a>  */}
          {group.leader}
        </td>

        <td className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder opacity-75">
          <button
            type="button"
            className="w-100 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#updateGroupModal" + group.id}
          >
            update Group
          </button>
          {/* </td>
              <td> */}
          <button
            onClick={() => deleteGroup(group.id)}
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
    </>
  );
};

export default Group;
