import React from "react";
import styled from "styled-components";
import "../components/shared/theme.css";
import { useSelector } from "react-redux";
// import Button from "../components/features/Button";
import kakao from "../assets/img/kakao.svg";
import insta from "../assets/img/insta.svg";

const Confirm = () => {
  const user = useSelector((state) => state.user.value);

  // {user.user_nickName}
  // {user.어쩌구로} 사용할 수 있음!
  return (
    <div className="Create">
      <TitleLarge>부적이 도착했어요!</TitleLarge>
      {/* 임시로 해놓았습니다. */}
      {/* <LoadingImg src={bujeok} alt="새해 부적" /> */}
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
        <Social>
          <Insta>
            <img src={insta} alt="인스타" />
          </Insta>
          <Kakao>
            <img src={kakao} alt="카카오" />
          </Kakao>
        </Social>
      </Wish>
    </div>
  );
};

export default Confirm;

const TitleLarge = styled.div`
  color: #f7f7f7;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 2vh;
`;

const Wish = styled.div``;

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
  margin-top: 2vh;
  // padding: 12px 16px 16px;

  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #f7f7f7;
  padding: 12px 16px;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 8px;
  display: inline-block;

  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.07em;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
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

  display: flex;
  flex-basis:100%;
  align-items: center;
  justify-content: center;
  margin: 8px 0px;

  // 지금 이 아래꺼가 하나도 먹지 않음..
  &::before {
    content: "";
    flex-grow: 1,
    margin: 0px 16px;
    background: white;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  &::after {
    content: "";
    flex-grow: 1,
    margin: 0px 16px;
    background: white;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

const Insta = styled.div`
  margin-right: 16px;
`;
const Kakao = styled.div``;
