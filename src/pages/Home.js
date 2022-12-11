import React from "react";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import "../components/shared/theme.css";
import { ReactComponent as Wish } from "../assets/img/wishbujeok.svg";
import son from "../assets/img/부적을잡은손.svg";
import kLogin from "../assets/img/klogin.png";
// import { decrypt, encrypt } from "../hooks/crypto-decrypto";

const Home = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=account_email`;
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${encrypt(
  //   process.env.REACT_APP_REDIRECT_URI
  // )}`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  // 암호화 ${encrypt(prcess.env.REACT_APP_REDIRECT_URI)} => 이런식으로 할 수 있는데
  // env 파일이 git ignore에 추가가 되면 어떻게 그걸 또 숨겨놓지?
  // console.log(encrypt(process.env.REACT_APP_REDIRECT_URI));
  // console.log(encrypt(process.env.REACT_APP_REST_API_KEY));
  // 복호화
  // console.log(
  //   decrypt(encrypt(process.env.REACT_APP_REDIRECT_URI)),
  //   process.env.REACT_APP_REDIRECT_URI
  // );

  // code=다음이 인가코드, 이런식으로 전달됨.
  // http://localhost:3000/KakaoLogin?code=NXUqHihuX8uJbv-guRRIOePk3gJakTjGEiyx-cBArMw1JQMnP32gUN2UzKYauWaMIG6NFQopcSEAAAGE4Ta8jw

  return (
    <div className="Home">
      <AppLayout>
        <Title>
          새해부적
          <Wish></Wish>
        </Title>
        <Logo src={son} alt="손"></Logo>
        <Content>2023년, 당신의 소원을 이루어 줄 부적</Content>
        <KakaoLoginBtn>
          <img src={kLogin} onClick={handleLogin} alt="kakaoLogin" />
        </KakaoLoginBtn>
      </AppLayout>
    </div>
  );
};

// 아직 이미지 넣지 않음!
let Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-weight: 500;
  letter-spacing: -0.1em;
  margin-top: 30vh;
  color: white;
`;

let Logo = styled.img`
  height: 280px;
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
  margin-top: 15vh;
`;

let KakaoLoginBtn = styled.div`
  margin-top: 2.8vh;
  &:hover {
    cursor: pointer;
  }
`;

export default Home;
