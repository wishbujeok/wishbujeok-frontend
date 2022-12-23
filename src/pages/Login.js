import React from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { loginAccount } from "../reducer/Reducer";

import "../components/shared/theme.css";
import kLogin from "../assets/img/kakaoLogin.svg";
import son from "../assets/img/mainPageImg.png";

const Login = () => {
  // const dispatch = useDispatch();
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=profile_nickname,account_email`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    // dispatch(() => {
    //   loginAccount({
    //     accessToken: sessionStorage.accessToken,
    //     hasBujeok: sessionStorage.hasBujeok,
    //   });
    //   console.log("dispatch " + loginAccount);
    //   console.log("dispatchaccessToken " + loginAccount.accessToken);
    //   console.log("dispatchhasBujeok " + loginAccount.hasBujeok);
    // });
  };

  return (
    <div className="Home">
      <Title>
        <Logo src={son} alt="손"></Logo>
      </Title>
      <Content>2023년, 당신의 소원을 이루어 줄 부적</Content>
      <KakaoLoginBtn>
        <img src={kLogin} onClick={handleLogin} alt="kakaoLogin" />
      </KakaoLoginBtn>
    </div>
  );
};

let Title = styled.div`
  margin-top: 21vh;
`;

let Logo = styled.img`
  height: 280px;
`;

let Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  color: #f7f7f7;
  margin-top: 15vh;
`;

let KakaoLoginBtn = styled.div`
  margin-top: 2.8vh;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
