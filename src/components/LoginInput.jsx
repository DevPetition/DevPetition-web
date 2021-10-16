import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <form onSubmit={onSubmit}>
        <label>
          아이디
          <input type="text" value={id} onChange={onChangeId} />
        </label>
        <label>
          비밀번호
          <input type="password" value={password} onChange={onChangePassword} />
        </label>
        <button>login</button>
      </form>
      <p>
        계정이 없나요?<Link to="/signup">회원가입하러가기</Link>
      </p>
    </>
  );
};

export default LoginInput;
