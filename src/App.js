import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
