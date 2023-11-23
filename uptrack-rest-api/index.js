import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./src/commons/sequelize.js";
import userRoute from "./src/routes/UserRoute.js";
import studentRoute from "./src/routes/StudentRoute.js";
// import adminRoute from './src/routes/AdminRoute.js';
import cantonRoute from "./src/routes/CantonRoute.js";
import grupRoute from "./src/routes/GrupRoute.js";
import taskRoute from "./src/routes/TaskRoute.js";
import targetRoute from "./src/routes/TargetRoute.js";
import recordRoute from "./src/routes/RecordRoute.js";
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
