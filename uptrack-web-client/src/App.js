import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "./components/loginbutton";
import LogoutButton from "./components/logoutButton";
import "./App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "./service/user.service";
import { useEffect } from "react";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Grup from "./components/Grup";
import SingleGrup from "./components/SingleGrup";
import CantonManager from "./components/CantonManager";
import Canton from "./components/Canton";
import GrupLeader from "./components/GrupLeader";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import SingleStudent from "./components/SingleStudent";
import SingleCanton from "./components/SingleCanton";
import Layout from "./components/Layout";
import AddRecord from "./components/AddRecord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="canton" element={<CantonManager />} />
        <Route path="canton/:id" element={<SingleCanton />} />
        <Route path="grup" element={<GrupLeader />} />
        <Route path="grup/:id" element={<SingleGrup />} />
        <Route path="students/:id" element={<SingleStudent />} />
        <Route path="student" element={<Student />} />
        <Route path="records/add" element={<AddRecord />} />
      </Route>
    </Routes>
  );
}

export default App;
