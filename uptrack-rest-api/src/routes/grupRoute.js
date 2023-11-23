import express from "express";
import GrupService from "../services/GrupService.js";
// import * as grupService from '../service/student-service.js';

const router = express.Router();

//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get("/", async (req, res) => {
  const grupList = await GrupService.getGrups();
  res.status(200).send(grupList);
});

// router.post('/', async (req, res) => {
//   let newGrup = req.body;
//   let grupList = await GrupService.getGrups();

//   let existinggrup = grupList.findIndex((grup) => grup.email === newGrup.email);
//   console.log(existinggrup);
//   if (existinggrup === -1) {
//       const addedgrup = await GrupService.addGrup(newGrup);
//   res.status(201).send(addedgrup);
//   }
// });

router.post("/", async (req, res) => {
  let newGrup = req.body;
  const addedgrup = await GrupService.addGrup(newGrup);
  res.status(201).send(addedgrup);
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const grup = req.body;
  const updatedgrup = await GrupService.updateGrup(id, grup);
  res.status(200).send(updatedgrup);
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await GrupService.deleteGrup(id);
  res.status(200).send("Deleted!");
});

export default router;
