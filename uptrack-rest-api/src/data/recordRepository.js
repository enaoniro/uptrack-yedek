import Task from "../models/TaskModel.js";
import Student from "../models/StudentModel.js";
import Record from "../models/RecordModel.js";

const getStudentWithRecord = async (pStudent) => {
  return Record.findOne({
    where: {
      id: pStudent.id,
    },
    // include:  Target
  });
};

const getRecordList = async () => {
  return await Record.findAll();
    // include: Target
    
};

const createRecord = async (pRecord) => {
  try {
    return await Record.create(pRecord);
  } catch (error) {
    console.log(error);
  }
};

async function updateRecord(pId, pRecord) {
  try {
    let record = await Record.findByPk(pId);
    record.set({
     task1: pRecord.task1,
      task2: pRecord.task2,
      task3: pRecord.task3,
      task4: pRecord.task4,
      task5: pRecord.task5,
    });
    return await record.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteRecord = async (pId) => {
  try {
    await Record.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getStudentWithRecord,
  // isRecordExisting,
  getRecordList,
  createRecord,
  updateRecord,
  deleteRecord,
};
