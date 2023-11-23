import grupRepository from "../data/grupRepository.js";

const getGrups = async () => {
  const grupList = await grupRepository.getGrupList();
  return grupList;
};

const addGrup = async (pGrup) => {
  return await grupRepository.createGrup(pGrup);
};

const updateGrup = async (pId, pGrup) => {
  return await grupRepository.updateGrup(pId, pGrup);
};

const deleteGrup = async (pId) => {
  await grupRepository.deleteGrup(pId);
};

export default {
  //   getGrupByEmail,
  //   checkGrup,
  getGrups,
  addGrup,
  updateGrup,
  deleteGrup,
};
