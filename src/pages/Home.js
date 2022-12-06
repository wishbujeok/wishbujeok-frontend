import React from "react";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import "../components/shared/theme.css";
import { ReactComponent as Logo } from "../assets/img/새해부적.svg";
import kLogin from "../assets/img/klogin.png";
import { REST_API_KEY } from "../stores/Url";
import { REDIRECT_URL } from "../stores/Url";

const Home = () => {
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=account_email`;

  // const handleLogin = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // };

  // http://localhost:3000/KakaoLogin?code=NXUqHihuX8uJbv-guRRIOePk3gJakTjGEiyx-cBArMw1JQMnP32gUN2UzKYauWaMIG6NFQopcSEAAAGE4Ta8jw

  return (
    <div className="Home">
      <AppLayout>
        <Content>
          2023
          <Logo />
        </Content>
        <KakaoLoginBtn>
          {/* <img src={kLogin} onClick={handleLogin} /> */}
        </KakaoLoginBtn>
      </AppLayout>
    </div>
  );
};

let Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 15vh 0;
  color: white;
`;

let KakaoLoginBtn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Home;
