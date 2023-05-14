import TargetRepository from "../data/TargetRepository.js";
import Target from "../models/TargetModel.js";

//auth0 dan gelen pTargeti alip Target repoda var mi yok mu sorgulamasi yapip varsa geriye
const checkTarget = async (pTarget) => {
  // find Target object by email in the database
  // if the Target is existing in the db then allow the Target to log in (send role info back to the react)
  // if the Target is not existing then create the Target in the db
  const isTargetExisting = await TargetRepository.isTargetExisting(pTarget.id);
  if (isTargetExisting) {
    return TargetRepository.getTargetWithRole(pTarget.id);
  }
};

const getTargets = async () => {
  const targetList = await TargetRepository.getTargetList();
  return targetList;
};

const addTarget = async (pTarget) => {
  return await TargetRepository.createTarget(pTarget);
};

const updateTarget = async (pId, pTarget) => {
  return await TargetRepository.updateTarget(pId, pTarget);
};

const deleteTarget = async (pId) => {
  await TargetRepository.deleteTarget(pId);
};

export default {
  checkTarget,
  getTargets,
  addTarget,
  updateTarget,
  deleteTarget,
};
