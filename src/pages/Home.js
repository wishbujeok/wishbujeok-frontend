import React from "react";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import "../components/shared/theme.css";
import { ReactComponent as Wish } from "../assets/img/wishbujeok.svg";
import kLogin from "../assets/img/klogin.png";

const Home = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=account_email`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  console.log(process.env.REACT_APP_REDIRECT_URI);
  // http://localhost:3000/KakaoLogin?code=NXUqHihuX8uJbv-guRRIOePk3gJakTjGEiyx-cBArMw1JQMnP32gUN2UzKYauWaMIG6NFQopcSEAAAGE4Ta8jw

  return (
    <div className="Home">
      <AppLayout>
        <Title>
          새해부적
          <Wish />
        </Title>
        <Content>2023년, 당신의 소원을 이루어 줄 부적</Content>
        <KakaoLoginBtn>
          <img src={kLogin} onClick={handleLogin} alt="kakaoLogin" />
        </KakaoLoginBtn>
      </AppLayout>
    </div>
  );
};

let Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-weight: 500;
  margin: 30vh 0;
  color: white;
`;

let Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.07em;
  color: white;
  margin-top: 10vh;
`;

let KakaoLoginBtn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Home;
