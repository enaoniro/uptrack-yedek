import Grup from "../models/GrupModel.js";
import Canton from "../models/CantonModel.js";
import Student from "../models/StudentModel.js";

const getGrupList = async () => {
  return await Grup.findAll({
    include: Student,
  });
};

const createGrup = async (pGrup) => {
  try {
    return await Grup.create(pGrup);
  } catch (error) {
    console.log(error);
  }
};

async function updateGrup(pId, pGrup) {
  try {
    let grup = await Grup.findByPk(pId);
    grup.set({
      name: pGrup.name,
      leader: pGrup.leader,
      CantonId: pGrup.CantonId,
    });
    return await grup.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteGrup = async (pId) => {
  try {
    await Grup.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getGrupList,
  createGrup,
  updateGrup,
  deleteGrup,
};
