import express from "express";
import studentService from "../services/StudentService.js";
// import * as studentService from '../service/student-service.js';

const router = express.Router();

//tum studentlari isteyen frontend istegini alip student servisten bekle
router.get("/", async (req, res) => {
  const studentList = await studentService.getStudents();
  res.status(200).send(studentList);
});

// router.get('/:grupId', async (req, res) => {
//   const GrupId = req.params.grupId;
//   const studentList = await studentService.getStudentsByGrup(GrupId);
//   res.status(200).send(studentList);
// });

router.get("/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  const student = await studentService.getStudentsById(studentId);
  res.status(200).send(student);
});

router.post("/", async (req, res) => {
  const newStudent = req.body;
  const studentList = await studentService.getStudents();

  const existingstudent = studentList.findIndex(
    (student) => student.email === newStudent.email
  );
  console.log(existingstudent);
  if (existingstudent === -1) {
    const addedstudent = await studentService.addStudent(newStudent);
    res.status(201).send(addedstudent);
  }
});

// router.post('/grupId', async (req, res) => {
//   let newStudent = req.body;
//   let grupId = req.params.id;
//   let studentList = await studentService.getStudents();

//   let existingstudent = studentList.findIndex((student) => student.email === newStudent.email);
//   console.log(existingstudent);
//   if (existingstudent === -1) {
//       const addedstudent = await studentService.addStudent(newStudent);
//   res.status(201).send(addedstudent);
//   }
// });

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const student = req.body;
  const updatedStudent = await studentService.updateStudent(id, student);
  res.status(200).send(updatedStudent);
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await studentService.deleteStudent(id);
  res.status(200).send("Deleted!");
});

export default router;
