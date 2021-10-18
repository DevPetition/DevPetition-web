import React from "react";
import search from "../img/search.png";
import "../styles/Title.css";
import rogo from "../img/rogo.png";

const Title = () => {
  return (
    <div className="title0">
      <div className="title1">
        <span className="iconspan">
          <img className="rogo" src={rogo} />
          <h1 className="DevPetition">DevPetition</h1>
        </span>
        <label className="inputLabel">
          <input
            type="text"
            placeholder="정보를 검색해보세요"
            className="searchInput"
          />
          <div className="sea">
            <img src={search} className="searchIcon" />
          </div>
        </label>
        <p className="profile">로그인 | 회원가입</p>
      </div>
    </div>
  );
};

export default Title;
