import React, { useState } from "react";
import Temp from "./temp";
import logo from "../img/rogo.png";
import "../styles/EmailReq.css";

const EmailReq = () => {
  const [emailCode, setEmailCode] = useState("");

  const onChangeCode = (e) => {
    setEmailCode(e.target.value);
  };

  const codeSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Temp>
      <img src={logo} className="logo" />
      <p>이메일로 전송된 인증번호를 확인해 주세요 :)</p>
      <input
        className="emailCodeInput"
        type="text"
        onChange={onChangeCode}
        value={emailCode}
      />
      <button className="loginBt" onSubmit={codeSubmit}>
        확인
      </button>
    </Temp>
  );
};

export default EmailReq;
