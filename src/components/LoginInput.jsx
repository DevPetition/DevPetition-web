import React, { useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginInput.css";
import Temp from "../components/temp";
import rogo from "../img/rogo.png";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/reducer";

const LoginInput = memo(() => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const demi = useSelector((state) => state.Demi);
  const dispatch = useDispatch();
  const onChangeId = useCallback(
    (e) => {
      setID(e.target.value);
    },
    [id]
  );
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const find = demi.find((i) => i.id === id);
    if (find !== undefined) {
      if (find.password === password) {
        dispatch({ type: LOGIN, name: find.user });
      } else {
        return;
      }
    } else {
      return;
    }
  };

  return (
    <Temp>
      <img className="logo" src={rogo}></img>
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
              아이디
            </div>
            <input
              required
              type="text"
              className="userID"
              value={id}
              onChange={onChangeId}
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
              비밀번호
            </div>
            <input
              required
              type="password"
              className="userID"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <button className="loginBt">로그인</button>
        </form>
        <p className="noaccount">
          <span style={{ paddingRight: "15px" }}>계정이 없나요?</span>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span style={{ color: "#00AFE9" }}>회원가입하러가기</span>
          </Link>
        </p>
      </div>
    </Temp>
  );
});

export default LoginInput;
