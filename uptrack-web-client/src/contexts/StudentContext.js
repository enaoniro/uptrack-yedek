import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentsInGroup, setStudentsInGroup] = useState([]);

  const navigate = useNavigate();

  // setSelectedStudent(studentList.find((stu =>stu.id===student.id)))

  useEffect(() => {
    getStudentList();
  }, []);

  const getStudentList = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/students");
      const studentList = await response.json();
      setStudentList(studentList);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getStudentsInGroup = async (pId) => {
    const response = await fetch("http://localhost:3001/api/v1/students" + pId);
    const studentList = await response.json();
    const group = studentList.filter((student) => student.GroupId == pId);
    setStudentsInGroup(group);
  };

  const getStudentById = async (pId) => {
    const response = await fetch(
      `http://localhost:3001/api/v1/students/student/${pId}`
    );
    const student = await response.json();
    // const student = studentList.find((student) => student.id == pId);
    setStudent(student);
  };

  const addStudent = async (pStudent, id) => {
    const newStudent = {
      first_name: pStudent.first_name,
      last_name:pStudent.last_name,
      email: pStudent.email,
      GroupId: id,
      img: pStudent.img,
    }
    try {
        await fetch("http://localhost:3001/api/v1/students", {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();

      // setStudentList([...studentList, data]);
      setStudentList( [...studentList, newStudent]);
      console.log(studentList)
    //  getStudentList();
    // navigate("/")
      console.log("student context add student is rendered")
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async (pStudent) => {
    try {
      await fetch("http://localhost:3001/api/v1/students/" + pStudent.id, {
        method: "PUT",
        body: JSON.stringify(pStudent),
        headers: { "Content-Type": "application/json" },
      });

      setStudentList(
        studentList.map((student) =>
          student.id === pStudent.id ? pStudent : student
        )
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (pStudentId) => {
    try {
      await fetch("http://localhost:3001/api/v1/students/" + pStudentId, {
        method: "DELETE",
      });
      const updateDStudentList = studentList.filter(
        (student) => student.id !== pStudentId
      );

      setStudentList(updateDStudentList);
      getStudentList()
      alert("the student is deleted!")
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  };

  // const selectStudent = (id) => {
  //   setSelectedStudent(studentList.find(student=>student.id==id));
  //   return selectedStudent;
  // }

  // console.log("1", studentList);

  return (
    <StudentContext.Provider
      value={{
        getStudentById,
        student,
        setStudent,
        addStudent,
        updateStudent,
        setStudentsInGroup,
        studentsInGroup,
        getStudentList,
        getStudentsInGroup,
        deleteStudent,
        studentList,
        setStudentList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
