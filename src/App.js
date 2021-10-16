import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const isLog = useSelector((state) => state.login.isLog);
  return (
    <BrowserRouter>
      {isLog ? "" : <Route path="/" exact component={() => <Login />} /><Route path="/signup" component={Signup}></Route>}
    </BrowserRouter>
  );
};

export default App;
