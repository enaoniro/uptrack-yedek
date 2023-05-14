import studentRepository from '../data/studentRepository.js';
// import Student from '../models/StudentModel.js';

//auth0 dan gelen pStudenti alip Student repoda var mi yok mu sorgulamasi yapip varsa geriye 
// const checkStudent = async (pStudent) => {
//   // find Student object by email in the database
//   // if the Student is existing in the db then allow the Student to log in (send role info back to the react)
//   // if the Student is not existing then create the Student in the db
//   const isStudentExisting = await studentRepository.isStudentExisting(pStudent.email)
//   if(isStudentExisting){  

//     return studentRepository.getStudentWithRole(pStudent.email);
    
              
//    };
 
  
// }


const getStudentsByGroup = async (pGroupId) => {

  const StudentsInGroup = await studentRepository.getStudentByGroupId(pGroupId)
  return StudentsInGroup;
}

const getStudentsById = async (pId) => {

  const student = await studentRepository.getStudentById(pId)
  return student;
}


const getStudents = async () => {
  const studentList = await studentRepository.getStudentList();
  return studentList;
};

const addStudent = async (pStudent) => {
  return await studentRepository.createStudent(pStudent);
};

const updateStudent = async (pId, pStudent) => {
  return await studentRepository.updateStudent(pId, pStudent);
};

const deleteStudent = async (pId) => {
  await studentRepository.deleteStudent(pId);
};

export default {
getStudentsByGroup,
getStudentsById,
//   checkStudent,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
}
