import React from "react";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import "../components/shared/theme.css";
import bujeok from "../assets/img/로딩이미지.svg";
// import Button from "../components/features/Button";
// import { IconName } from "react-icons/ai";

const Confirm = () => {
  return (
    <div className="Create">
      <AppLayout>
        <TitleLarge>부적이 도착했어요!</TitleLarge>
        {/* 임시로 해놓았습니다. */}
        <LoadingImg src={bujeok} alt="새해 부적" />
        <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
        <Wish>
          <TitleSmall>ㅇㅇㅇ님이 빌었던 소원이에요.</TitleSmall>
          <Content>
            정말 간절해요 어쩌구 저쩌구 삐용삐용
            <br />
            이거 참 재밌다~! 혹시 내용이 넘어가면 어떡하지?
          </Content>
          <BujeokBtn>
            {/* <Link to="/loading"> */}
            부적 저장하기
            {/* </Link> */}
          </BujeokBtn>
          <Share>공유하기</Share>
        </Wish>
      </AppLayout>
    </div>
  );
};

export default Confirm;

const TitleLarge = styled.div`
  // border: 1px solid;
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.07em;
  margin-top: 10vh;
`;

const LoadingImg = styled.img`
  margin-top: 4vh;
`;

const BodyLarge = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 2vh;
`;

const Wish = styled.div``;

// TitleSmall 하고 Content 왼쪽정렬해야함.
const TitleSmall = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 6vh;
  display: flex;
  text-align: left;
`;

const Content = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 2vh;
  padding: 12px 16px 16px;
  background: rgba(255, 255, 255, 0.1);
`;

const BujeokBtn = styled.button`
  background-color: #da234f;
  color: white;
  width: 327px;
  height: 56px;
  border-radius: 10px;
  border: none;
  margin-top: 8vh;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: center;
  letter-spacing: -0.07em;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Share = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.07em;
  text-align: center;
  color: white;
  margin-top: 6vh;
  // border: 1px solid;
`;
