import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./src/commons/sequelize.js";
import userRoute from "./src/routes/userRoute.js";
import studentRoute from "./src/routes/studentRoute.js";
// import adminRoute from './src/routes/AdminRoute.js';
import cantonRoute from "./src/routes/cantonRoute.js";
import grupRoute from "./src/routes/grupRoute.js";
import taskRoute from "./src/routes/taskRoute.js";
import targetRoute from "./src/routes/targetRoute.js";
import recordRoute from "./src/routes/recordRoute.js";
// import mongoose from "mongoose";

const app = express();
const port = 3001;
// mongoose.connect("mongodb+srv://can:50473524.Su@tasks.b85azwo.mongodb.net/?retryWrites=true&w=majority");

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use('/api/v1/users');
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);
app.use("/api/v1/targets", targetRoute);
app.use("/api/v1/records", recordRoute);
app.use("/api/v1/cantons", cantonRoute);
app.use("/api/v1/grups", grupRoute);
app.use("/api/v1/students", studentRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
