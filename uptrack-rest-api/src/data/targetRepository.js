import Task from "../models/TaskModel.js";
import Student from "../models/StudentModel.js";
import Target from "../models/TargetModel.js";
import Record from "../models/RecordModel.js";

const getStudentWithTarget = async (pStudent) => {
  return Target.findOne({
    where: {
      id: pStudent.id,
    },
    // include:  Target
  });
};

const getTargetList = async () => {
  return await Target
    .findAll({

      include:[ Record ]
    })
    ;
};

const createTarget = async (pTarget) => {
  try {
    return await Target.create(pTarget);
  } catch (error) {
    console.log(error);
  }
};

// const createTarget = async (pTarget) => {
//   // try {
//     // let task = await Task.findByPk(pId);
//     let target = {
//     // let pId = task.StudentId;
//     // await Task.create({
//       task1: pTarget.task1,
//       task2: pTarget.task2,
//       task3: pTarget.task3,
//       task4: pTarget.task4,
//       task5: pTarget.task5,
//       StudentId: pTarget.StudentId,
//     };
//      try {
//     return await Target.create(target);
//   } catch (error) {
//     console.log(error);
//   }
//   //   return await task.save();
//   // } catch (error) {
//   //   console.log(error);
//   // }
// }

async function updateTarget(pId, pTarget) {
  try {
    let target = await Target.findByPk(pId);
    target.set({
      task1: pTarget.task1,
      task2: pTarget.task2,
      task3: pTarget.task3,
      task4: pTarget.task4,
      task5: pTarget.task5,
    });
    return await target.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteTarget = async (pId) => {
  try {
    await Target.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getStudentWithTarget,
  // isTaskExisting,
  getTargetList,
  createTarget,
  updateTarget,
  deleteTarget,
};
