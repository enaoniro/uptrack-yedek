import RecordRepository from "../data/RecordRepository.js";
import Record from "../models/RecordModel.js";

//auth0 dan gelen pRecordi alip Record repoda var mi yok mu sorgulamasi yapip varsa geriye
const checkRecord = async (pRecord) => {
  // find Record object by email in the database
  // if the Record is existing in the db then allow the Record to log in (send role info back to the react)
  // if the Record is not existing then create the Record in the db
  const isRecordExisting = await RecordRepository.isRecordExisting(pRecord.id);
  if (isRecordExisting) {
    return RecordRepository.getRecordWithRole(pRecord.id);
  }
};

const getRecords = async () => {
  const recordList = await RecordRepository.getRecordList();
  return recordList;
};

const addRecord = async (pRecord) => {
  return await RecordRepository.createRecord(pRecord);
};

const updateRecord = async (pId, pRecord) => {
  return await RecordRepository.updateRecord(pId, pRecord);
};

const deleteRecord = async (pId) => {
  await RecordRepository.deleteRecord(pId);
};

export default {
  checkRecord,
  getRecords,
  addRecord,
  updateRecord,
  deleteRecord,
};
