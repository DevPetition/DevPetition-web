import React, { useEffect, useState } from "react";

const SignUpInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onSubmit = (e) => {
    e.preventDefualt();
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
    <>
      <form onSubmit={onSubmit}>
        <label>
          이름
          <input type="text" value={name} onChange={onChangeName} />
        </label>
        <label>
          이메일
          <input type="text" value={email} onChange={onChangeEmail} />
          <button>중복확인</button>
        </label>
        <label>
          아이디
          <input type="text" value={id} onChange={onChangeId} />
          <button>중복확인</button>
        </label>
        <label>
          비밀번호
          <input type="password" value={password} onChange={onChangePassword} />
        </label>
        <label>
          비밀번호 확인
          <input
            type="password"
            value={password2}
            onChange={onChangePassword2}
          />
        </label>
        {passwordCheck ? <p>비밀번호가 틀립니다</p> : ""}
        <button>회원가입하기</button>
      </form>
    </>
  );
};

export default SignUpInput;
