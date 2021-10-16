import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginInput.css";

const LoginInput = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    setID(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefualt();
  };

  return (
    <div className="maxSize">
      <form onSubmit={onSubmit} className="userIDPW">
        <label>
          아이디
          <input
            type="text"
            className="userID"
            value={id}
            onChange={onChangeId}
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            className="userID"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <button className="loginBt">로그인</button>
      </form>
      <p className="noaccount">
        계정이 없나요?<Link to="/signup">회원가입하러가기</Link>
      </p>
    </div>
  );
};

export default LoginInput;
