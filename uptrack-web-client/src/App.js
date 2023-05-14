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
import Home from "./components/home";
import Admin from "./components/Admin";
import Group from "./components/Group";
import SingleGroup from "./components/SingleGroup";
import CantonManager from "./components/cantonmanager";
import Canton from "./components/Canton";
import GroupLeader from "./components/GroupLeader";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import SingleStudent from "./components/SingleStudent";
import SingleCanton from "./components/SingleCanton";
import Layout from "./components/layout";
import AddRecord from "./components/AddRecord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="canton" element={<CantonManager />} />
        <Route path="canton/:id" element={<SingleCanton />} />
        <Route path="group" element={<GroupLeader />} />
        <Route path="group/:id" element={<SingleGroup />} />
        <Route path="students/student/:id" element={<SingleStudent />} />
        <Route path="student" element={<Student/>}/>
        <Route path="records/add" element={<AddRecord/>}/>
      </Route>
    </Routes>
  );
}

export default App;
