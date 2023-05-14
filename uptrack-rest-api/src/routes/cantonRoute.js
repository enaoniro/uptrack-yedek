import express from 'express';
import cantonService from '../services/cantonService.js';
// import * as cantonService from '../service/student-service.js';

const router = express.Router();



//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get('/', async (req, res) => {
  const cantonList = await cantonService.getCantons();
  res.status(200).send(cantonList);
});

router.post('/', async (req, res) => {
  let newcanton = req.body;
  let cantonList = await cantonService.getCantons();
  let existingcanton = cantonList.findIndex((canton) => canton.name === newcanton.name);
  console.log(existingcanton);
  if (existingcanton === -1) {
      const addedcanton = await cantonService.addCanton(newcanton);
  res.status(201).send(addedcanton);
  }
});
  
  export default router;

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const canton = req.body;
  const updatedCanton = await cantonService.updateCanton(id, canton);
  res.status(200).send(updatedCanton);
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await cantonService.deleteCanton(id);
  res.status(200).send('Deleted!');
});


