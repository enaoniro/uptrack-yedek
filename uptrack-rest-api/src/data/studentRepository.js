import Student from "../models/StudentModel.js";
import Task from "../models/TaskModel.js";
import Target from "../models/TargetModel.js";
import Record from "../models/RecordModel.js";
import Grup from "../models/GrupModel.js";

// export async function findByEmail(pEmail){
//   return await User.findOne(pEmail);
// }

// export async function isUserExisting(pEmail){

//   const emailCount = await User.count({
//       where: {email: pEmail}
//     });
//   return emailCount == 0 ? false : true;

// }

// const getStudentWithTask = async (pId) => {
//   return Student.findOne({
//   where: {
//     id: pId
//   },
//   include: [Task, Target, Record]
// });
// }

const getStudentByGrupId = async (pId) => {
  return Student.findAll({
    where: {
      GrupId: pId,
    },
  });
};

const getStudentById = async (pId) => {
  return Student.findOne({
    where: {
      id: pId,
    },
  });
};

const getStudentList = async () => {
  return await Student.findAll({
    include: [Task],
  });
};

const createStudent = async (pStudent) => {
  try {
    return await Student.create(pStudent);
  } catch (error) {
    console.log(error);
  }
};

async function updateStudent(pId, pStudent) {
  try {
    let student = await Student.findByPk(pId);
    student.set({
      first_name: pStudent.first_name,
      last_name: pStudent.last_name,
      email: pStudent.email,
      GrupId: pStudent.GrupId,
      TaskId: pStudent.TaskId,
      // TargetId: pStudent.TargetId,
      // RecordId: pStudent.RecordId,
    });
    return await student.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async (pId) => {
  try {
    await Student.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  //  getStudentWithTask,
  getStudentByGrupId,
  getStudentById,
  //   isStudentExisting,
  getStudentList,
  createStudent,
  updateStudent,
  deleteStudent,
};
