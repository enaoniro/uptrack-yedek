import React from "react";
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "../service/front.user.service";
import { UserContext } from "../contexts/UserContext";
import Admin from "./Admin";
import CantonManager from "../components/cantonmanager";
import GroupLeader from "../components/GroupLeader";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";

function Home() {
  const [role, setRole] = useState("");

  const {
    addUser,
    getUserbyEmail,
    checkAuthenticatedUser,
    userInDatabase,
  } = useContext(UserContext);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  useEffect(() => {
    const checkUser = async (pUser) => {
      const user = await checkAuthenticatedUser(pUser);
      console.log(user);

      if (!user) {
        logoutWithRedirect();
      }

      // Rolü elde ettikten sonra state'i güncelliyoruz.
      // Gelen user bilgisi aynı postman'de gördüğümüz şekilde olacak
      setRole(user.Role.name);
      console.log(user);
    };

    // user değerinin dolu olduğundan emin olalım
    // bunu yapmazsak useEffect ilk yüklenirken çalıştığında hata verir
    if (user) {
      // Eğer doluysa fonksiyonu çağıralım
      checkUser(user);
      console.log(user);

      // setRole(user.Role.name);
    }
  }, [isAuthenticated]);

  // console.log(user);

  return (
    <>
      {!isAuthenticated && (
        
          <Container fluid className="bg-white">
            <div className="m-0 p-0 container-fluid bg-white ">
              <header className="px-3 border-bottom navbar navbar-expand-lg shadow-lg">
                {/* <a
                href="/"
                className="d-flex align-items-center text-primary text-decoration-none"
              >
                <span className="fs-4">uptrack</span>
              </a> */}
              </header>
            </div>

            <div className="w-100 h-100 d-flex justify-items-center bg-white align-items-center flex-column ">
              <div className="bg-white">
                <h1>please login</h1>
                <p>
                  You can login with the below information:<br></br>
                  email:uptracknewuser@gmail.com<br></br>
                  password:Uptrack.1
                </p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </div>
            </div>
          </Container>
        
      )}
      <Container fluid className=" p-3 bg-white shadow-lg">
        {role === "admin" && <Admin />}
        {role === "canton manager" && <CantonManager />}
        {role === "group leader" && <GroupLeader />}
      </Container>
    </>
  );
}

export default Home;
