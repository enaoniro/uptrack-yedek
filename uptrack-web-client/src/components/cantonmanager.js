import React, { useContext, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import AddGroup from "./AddGroup.js";
// import UpdateGroup from "./UpdateGroup.js";
import GroupList from "./GroupList.js";
import CantonList from "./CantonList.js";
import Group from "./Group.js";
import { useEffect, useState } from "react";
import { GroupContext} from "../contexts/GroupContext.js";
import { CantonContext} from "../contexts/CantonContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";


  function CantonManager () {
    const [isOpen, setIsOpen] = useState(false);
    const {groupList} = useContext(GroupContext);
    const {cantonList} = useContext(CantonContext);
    
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

        
      const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
      });

      const canton = cantonList?.find((canton)=>canton?.email==user.email)
      console.log(canton)
      // const group = groupList?.map((group) =>group?.CantonId === canton.id);
      // console.log(group)
    
      const handleClick =()=>{
        setIsOpen(true)
      }

return (
  <div id="main">
    <Container fluid className="mt-10 p-3 bg-white">
      <div className="container-fluid m-0 p-0">
        <header
          className=" m-3 navbar navbar-expand-lg" 
          id="header"
        >
          {/* <a
            href="/"
            className="d-flex align-items-center text-primary text-decoration-none"
          >
            <span className="fs-5">uptrack</span>
          </a> */}
          <div className="navbar-collapse offcanvas-collapse">
            <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
              {/* <li className="nav-item">
                <span className="fs-5 p-1 text-primary"> | </span>
              </li> */}

                <li className="nav-item text-primary">
                  {/* <a
                    className="nav-link text-primary"
                    href="http://localhost:3000/canton"
                  > */}
                    Canton Page
                  {/* </a> */}
                </li>
              
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-1 mb-1 mb-lg-0">
                <li>
                  <h6 className="d-inline-block p-1">{user?.name}</h6>
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
      <div className="container-fluid bg-white" id="innerdiv">
        <div className="row">
          <div className="col-md-1 text-primary me-5 p-3" id="listebox">
            <div className="w-100 text-align-center">
              {/* <h5 className="text-white bg-primary">CANTONS</h5> */}
              <button
                type="button"
                className="btn btn-success fs-6 w-100 m-1"
                // data-bs-toggle="modal"
                // data-bs-target={"#addGroupModal"}
                onClick={() => setIsOpen(!isOpen)}
              >
                ADD Group
              </button>
              {/* <button
                type="button"
                className="btn btn-success fs-6 w-100 m-1"
                data-bs-toggle="modal"
                data-bs-target={"#addCantonModal"}
                // className="btn w-100 m-1 bg-success text-white btn-success"
                // type="button"
                // onClick={()=>setNewCanton(newCanton ? false : true)}
              >
                ADD Canton
              </button> */}
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
                // onClick={() => handleClick()}
              >
                Groups
              </button>
              <br></br>
            </div>
            
          </div>
          <div className="col-md-10" id="details-div">
          <div
          className="h-100" id="form-div"
          // className="modal fade"
          // id={"addGroupModal"}
          // tabIndex="-1"
          // aria-labelledby="exampleModalLabel"
          // aria-hidden="true"
        >
         {isOpen ? <AddGroup canton={canton} /> : null }
         <GroupList canton={canton}/>  
        </div>
            {/* <div
              id="schweiz"
              className="bg-primary d-flex align-content-center justify-content-center mt-2 opacity-75"
            >
              <p className="text-white fw-bold">{canton.name}</p>
            </div>
            <div className="h-100" id="form-div">
              <GroupList canton={canton}/>  
            </div>
          </div>
        </div> */}
       
        <footer className="pt-3 mt-4 text-primary border-top border-gray fixed-bottom">
          <p id="copyright">can &copy; 2022</p>
        </footer>
      </div>
    </div>
    </div>
    </div>
    </Container>
</div>
)
}
        
export default CantonManager
                                    