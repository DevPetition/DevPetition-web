import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        to="/ranking"
        activeStyle={{ backgroundColor: "#00e3d6" }}
        className="navButton"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        대회랭킹
      </NavLink>
      <NavLink
        to="/leagueInfo"
        activeStyle={{ backgroundColor: "#00e3d6" }}
        className="navButton"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        대회정보
      </NavLink>
      <NavLink
        to="/myapply"
        activeStyle={{ backgroundColor: "#00e3d6" }}
        className="navButton"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        내 신청 현화
      </NavLink>
    </div>
  );
};

export default Nav;
