import Task from "../models/TaskModel.js";
import Student from "../models/StudentModel.js";
import Target from "../models/TargetModel.js";
import Record from "../models/RecordModel.js";

const getStudentWithTask = async (studentId) => {
  return await Task.findAll({
    where: {
      StudentId: studentId ,
      // include:[Target,Record]
    },
  });
};



const getTaskList = async () => {
  return await Task.findAll({
    include: [Target, Record],
    // where: {'$employee.manager.id$': id},
    // include: [{
    //   model: models.Employee,
    //   required: true,
    //   as: 'employee',
    //   include: [{
    //     model: models.Manager,
    //     required: true,
    //     as: 'manager',
    //     where: { id: managerId },
    //   }],
    // }],
  });
};

// const getTaskList = async () => {
//   return await Task.findAll({
//     include:{Student}
//   });
// };

// const createTask = async (pTask) => {
//   let task = pTask.body;
//   // let StudentId = pTask.StudentId,
//   try {
//     return await Task.create(task);
//   } catch (error) {
//     console.log(error);
//   }
// };

async function createTask(pTask) {
  try {
    return await Task.create(pTask);
  } catch (error) {
    console.log(error);
  }
}

async function updateTask(pId, pTask) {
  try {
    let task = await Task.findOne({
      where: {
        id: pId,
      },
    });

    task.set({
      task1: pTask.task1,
      task2: pTask.task2,
      task3: pTask.task3,
      task4: pTask.task4,
      task5: pTask.task5,
    });
    return await task.save();
  } catch (error) {
    console.log(error);
  }
}

async function updateTaskComplete(pId, pTask) {
  try {
    let task = await Task.findOne({
      where: {
        id: pId,
      },
    });

    task.set({
      task1: pTask.task1,
      task2: pTask.task2,
      task3: pTask.task3,
      task4: pTask.task4,
      task5: pTask.task5,
      isCompleted:true,

    });
    return await task.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteTask = async (pId) => {
  try {
    await Task.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getStudentWithTask,
  // isTaskExisting,
  getTaskList,
  createTask,
  updateTask,
  deleteTask,
  updateTaskComplete,
};
