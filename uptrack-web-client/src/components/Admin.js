import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import AddCanton from "./AddCanton.js";
import Canton from "./Canton.js";
import CantonList from "./CantonList.js";
import UserList from "./UserList .js";
import AddUser from "./AddUser.js";
import { useEffect, useState } from "react";
import { CantonContext } from "../contexts/CantonContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";

function Admin() {
  const [showDetails, setShowDetails] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { cantonList, setNewCanton, newCanton, isOpen, setIsOpen } = useContext(
    CantonContext
  );

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const canton = cantonList.map((canton) => canton);

  // const handleClick = () => {
  //   setShowDetails(showDetails ? false : true);

  //   // setShowDetails(false);
  // };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="" id="main" key={canton.id}>
      <Container fluid className="bg-white">
        <div className="container-fluid mb-2 p-1 shadow-sm">
          <header className="m-2 navbar navbar-expand-lg " id="header">
            <div className="navbar-collapse">
              <ul className="navbar-nav me-auto d-flex align-items-center justify-content-center ">
                {/* <li className="nav-item">
                <span className="fs-5 text-primary">uptrack  </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li> */}
                <li className="">
                  <a href="/" className="">
                    <span>
                      <FaHome />
                    </span>
                  </a>
                </li>
                <li className="text-primary mx-3">
                  <span>
                    {/* <a
                  className="nav-link text-primary"
                  href="http://localhost:3000/canton"
                >
                </a> */}
                    Admin Page
                  </span>
                </li>
              </ul>
              <div className="">
                <ul className="navbar-nav d-flex align-items-center ">
                  <li className="me-2 ">{user.name}</li>
                  <li>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => logoutWithRedirect()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        <div className="w-75 container-fluid bg-white" id="innerdiv">
          <div className="row">
            <div className="col-md-1 text-primary me-5 p-3" id="listebox">
              <div className="w-100 text-align-center">
                {/* <h5 className="text-white bg-primary">CANTONS</h5> */}
                <button
                  type="button"
                  className="btn btn-success fs-6 w-100 m-1"
                  data-bs-toggle="modal"
                  data-bs-target={"#addUserModal"}
                >
                  {/* onClick={() => setIsOpen(isOpen ? false : true)} */}
                  ADD user
                </button>
                <button
                  type="button"
                  className="btn btn-success fs-6 w-100 m-1"
                  data-bs-toggle="modal"
                  data-bs-target={"#addCantonModal"}
                >
                  ADD Canton
                </button>
                {/* <button
                className="w-100 m-1 btn btn-primary text-white "
                type="button"
                onClick={() => handleClick()}
              >
                Cantons
              </button> */}
                <button
                  className="w-100 m-1 btn btn-primary text-white "
                  type="button"
                  onClick={() => handleClick()}
                >
                  Users
                </button>
                <br></br>
              </div>
              {/* <div>{canton.name}</div> */}
            </div>
            <div className="col-md-10 bg-white" id="details-div">
              <div
                id="schweiz"
                className="bg-primary d-flex align-content-center justify-content-center"
              ></div>
              <div className="h-100 bg-white" id="form-div">
                {isOpen ? <UserList /> : <CantonList />}
                {/* {newCanton && <AddCanton />} */}
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id={"addUserModal"}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <AddUser user={user} />
          </div>
          <div
            className="modal fade"
            id={"addCantonModal"}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <AddCanton canton={canton} />
          </div>
          <div>
            <footer className="pt-3 mt-4 text-primary border-top border-gray fixed-bottom shadow-lg">
              <p id="copyright">can &copy; 2022</p>
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Admin;
