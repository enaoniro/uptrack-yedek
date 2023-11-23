import Canton from "../models/CantonModel.js";
import Grup from "../models/GrupModel.js";

const getCantonList = async () => {
  return await Canton.findAll({
    include: Grup,
  });
};

const createCanton = async (pCanton) => {
  try {
    return await Canton.create(pCanton);
  } catch (error) {
    console.log(error);
  }
};

async function updateCanton(pId, pCanton) {
  try {
    let canton = await Canton.findByPk(pId);
    canton.set({
      name: pCanton.name,
      email: pCanton.email,
    });
    return await canton.save();
  } catch (error) {
    console.log(error);
  }
}

const deleteCanton = async (pId) => {
  try {
    await Canton.destroy({
      where: {
        id: pId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  //   getCantonWithRole,
  //   isCantonExisting,
  getCantonList,
  createCanton,
  updateCanton,
  deleteCanton,
};
