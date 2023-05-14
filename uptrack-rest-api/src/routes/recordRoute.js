import express from "express";
import RecordService from "../services/RecordService.js";
// import * as RecordService from '../service/Record-service.js';

const router = express.Router();

//tum Recordlari isteyen frontend istegini alip Record servisten bekle
router.get("/", async (req, res) => {
  const recordList = await RecordService.getRecords();
  res.status(200).send(recordList);
});

router.get("/:id", async (req, res) => {
  const recordId = req.params.id;
  const record = await RecordService.getRecords(recordId);
  res.status(200).send(record);
});

router.post("/", async (req, res) => {
  const record = req.body;
  const newRecord = await RecordService.addRecord(record);
  res.status(201).send(newRecord);
});

router.put("/:id", async (req, res) => {
  const recordId = req.params.id;
  const existingRecord = req.body;
  const updatedRecord = await RecordService.updateRecord(
    recordId,
    existingRecord
  );

  res.status(200).send(updatedRecord);
});

router.delete("/:id", async (req, res) => {
  const recordId = req.params.id;
  await RecordService.deleteRecord(recordId);
  res.status(200);
});

export default router;
