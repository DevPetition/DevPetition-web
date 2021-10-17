import React, { useEffect, useState } from "react";
import logo from "../img/rogo.png";
import Temp from "./temp";
import "../styles/LoginInput.css";
import { Link } from "react-router-dom";

const SignUpInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
    if (password !== password2) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  useEffect(() => {
    if (password !== password2) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }, [password2]);

  return (
    <Temp>
      <img src={logo} className="logo"></img>
      <div className="maxSize">
        <form onSubmit={onSubmit} className="userIDPW">
          <label>
            <div
              style={{
                margin: "0 0 30px 10px",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "12px",
              }}
            >
              이름
            </div>
            <input
              className="userID"
              type="text"
              value={name}
              onChange={onChangeName}
            />
          </label>
          <label>
            <div
              style={{
                margin: "0 0 30px 10px",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "12px",
              }}
            >
              이메일
            </div>
            <input
              className="userID"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
            <button className="checkBut">중복확인</button>
          </label>
          <label>
            <div
              style={{
                margin: "0 0 30px 10px",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "12px",
              }}
            >
              아이디
            </div>
            <input
              className="userID"
              type="text"
              value={id}
              onChange={onChangeId}
            />
            <button className="checkBut2">중복확인</button>
          </label>
          <label>
            <div
              style={{
                margin: "0 0 30px 10px",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "12px",
              }}
            >
              비밀번호
            </div>
            <input
              className="userID"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <label>
            <div
              style={{
                margin: "0 0 30px 10px",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "12px",
              }}
            >
              비밀번호 확인
            </div>
            <input
              className="userID"
              type="password"
              value={password2}
              onChange={onChangePassword2}
            />
          </label>
          {passwordCheck ? <p>비밀번호가 틀립니다</p> : ""}
          <button className="loginBt">회원가입하기</button>
        </form>
        <p className="noaccount">
          <span style={{ paddingRight: "15px" }}>계정이 있나요?</span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "#00AFE9" }}>로그인하러가기</span>
          </Link>
        </p>
      </div>
    </Temp>
  );
};

export default SignUpInput;
