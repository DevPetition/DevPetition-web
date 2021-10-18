import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import EmailReq from "./pages/EmailReq";
import Login from "./pages/Login";
import MainPages from "./pages/MainPages";
import SignUp from "./pages/SignUp";

const App = () => {
  const isLog = useSelector((state) => state.login.isLog);
  return (
    <BrowserRouter>
      {isLog ? (
        <BrowserRouter>
          <Route path="/" exact component={MainPages} />
          <Route path="/ranking" component={MainPages} />
          <Route path="/leagueInfo" component={MainPages} />
          <Route path="/myapply" component={MainPages} />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/signup" component={SignUp} />
          <Route path="/email" component={EmailReq} />
        </BrowserRouter>
      )}
    </BrowserRouter>
  );
};

export default App;
