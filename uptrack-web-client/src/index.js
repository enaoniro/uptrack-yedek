// import dotenv from './dotenv/config';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import UserContextProvider from "./contexts/UserContext";
import CantonContextProvider from "./contexts/CantonContext";
import GroupContextProvider from "./contexts/GroupContext";
import StudentContextProvider from "./contexts/StudentContext";
import TaskContextProvider from "./contexts/TaskContext";
import TargetContextProvider from "./contexts/TargetContext";
import RecordContextProvider from './contexts/RecordContext';
import { BrowserRouter } from "react-router-dom";
import { Router, Routes, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain= "dev-nvkdil22.eu.auth0.com"
      clientId="tL3vLjSd8ZphVAxt4GgwgqOiZNYpTjsz"
      redirectUri={window.location.origin}
    >
      <UserContextProvider>
        <CantonContextProvider>
          <GroupContextProvider>
            <StudentContextProvider>
              <TaskContextProvider>
                <TargetContextProvider>
                  <RecordContextProvider>
                  <Routes>
                    <Route path="/*" element={<App />} />
                  </Routes>
                  </RecordContextProvider>
                </TargetContextProvider>
              </TaskContextProvider>
            </StudentContextProvider>
          </GroupContextProvider>
        </CantonContextProvider>
      </UserContextProvider>
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
