import React from "react";
import { FaHome } from "react-icons/fa"
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "../service/front.user.service";
import { UserContext } from "../contexts/UserContext";
import Admin from "./Admin";
import CantonManager from "../components/cantonmanager";
import GroupLeader from "../components/GroupLeader";
import Layout from "../components/layout";

function Navbar() {
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
    
      
      
        
          <div className="m-0 p-0 container-fluid bg-primary opacity-75">
            <header className="px-1 border-bottom navbar navbar-expand-lg shadow-lg">
              <a
                href="/"
                className="d-flex align-items-center text-white text-decoration-none"
              >
                {/* <span className="fs-4">uptrack</span>
                <hr></hr> */}
                <span>uptrack</span>
              </a>
            </header>
          </div>

    
  );
}
export default Navbar;
