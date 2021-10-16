import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  const isLog = useSelector((state) => state.login.isLog);
  return (
    <BrowserRouter>
      {isLog ? "" : <Route path="/" component={() => <Login />} />}
    </BrowserRouter>
  );
};

export default App;
