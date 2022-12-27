import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  ScreenShot,
  onSaveAs,
  handleScreenShot,
} from "../components/features/ScreenShot";

import { SiInstagram } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

import "../components/shared/theme.css";

import themeImg from "../assets/img/DefaultBujeokImg.svg";
const themeText = "응원합니다. 잘 될꺼에요. ";

const Confirm = () => {
  const [userData, setUserData] = useState();
  const [haveMessage, setHaveMessage] = useState("null");

  useEffect(() => {
    axios.get("/bujeok-management/reply").then((data) => setHaveMessage(data));
  }, []);

  const user = useSelector((state) => state.user.value);

  const handleSaveImg = () => {
    handleScreenShot();
  };

  const handleShareInstar = () => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=");
  };

  // {user.user_nickName}
  // {user.어쩌구로} 사용할 수 있음!
  return (
    <div className="Create">
      {haveMessage === null ? (
        <>
          <TitleLarge>{user.accessToken}의 부적이 도착했어요!</TitleLarge>
          {/* 임시로 해놓았습니다. */}
          {/* <LoadingImg src={bujeok} alt="새해 부적" /> */}
          <ScreenShot
            HopeImg={themeImg}
            text={themeText}
            message={haveMessage}
          />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>님이 빌었던 소원이에요.</TitleSmall>
            <Content>
              정말 간절해요 꼭 합격해서 제주도 교육이 지금보다
              <br />더 좋은 환경이 되었으면 좋겠어요 !
            </Content>
            <BujeokBtn bgc={"#DA234F"} width={"100%"} onClick={handleSaveImg}>
              부적 저장하기
            </BujeokBtn>
            <Share>
              <ShareBorder>공유하기</ShareBorder>
              <Social>
                <IconWrapper>
                  <SiInstagram className="iconSize" />
                </IconWrapper>
                <IconWrapper>
                  <RiKakaoTalkFill className="iconSize" />
                </IconWrapper>
              </Social>
              {/* <button onClick={handleShareInstar}>인스타그램</button> */}
            </Share>
          </Wish>
        </>
      ) : (
        <>
          <TitleLarge>응원 메세지가 도착했어요!</TitleLarge>
          {/* 임시로 해놓았습니다. */}
          {/* <LoadingImg src={bujeok} alt="새해 부적" /> */}
          <ScreenShot HopeImg={themeImg} text={themeText} />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>ㅇㅇㅇ님이 빌었던 소원이에요.</TitleSmall>
            <Content>
              정말 간절해요 꼭 합격해서 제주도 교육이 지금보다 더 좋은 환경이
              되었으면 좋겠어요 !
            </Content>
            <HaveMessageButtonContainer>
              <BujeokBtn
                haveMessage={haveMessage}
                border={"red"}
                bgc={"black"}
                color={"#DA234F"}
                width={"183px"}
                onClick={handleSaveImg}
              >
                응원 메세지 다시받기
              </BujeokBtn>
              <BujeokBtn
                haveMessage={haveMessage}
                bgc={"#DA234F"}
                color={"white"}
                width={"136px"}
                onClick={handleSaveImg}
              >
                부적 저장하기
              </BujeokBtn>
            </HaveMessageButtonContainer>
            <Share>
              <ShareBorder>공유하기</ShareBorder>
              <Social>
                <IconWrapper>
                  <SiInstagram className="iconSize" />
                </IconWrapper>
                <IconWrapper>
                  <RiKakaoTalkFill className="iconSize" />
                </IconWrapper>
              </Social>
              {/* <button onClick={handleShareInstar}>인스타그램</button> */}
            </Share>
          </Wish>
        </>
      )}
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
  text-align: left;
`;

const BujeokBtn = styled.button`
  box-sizing: border-box;
  background-color: ${({ bgc }) => (bgc === "black" ? "black" : bgc)};
  color: white;
  width: ${(width) => (width ? width : "100%")};
  height: 56px;
  border-radius: 10px;
  border: ${({ border }) => (border === "red" ? "1px solid red" : "none")};
  margin-top: 8vh;
  margin-right: ${({ haveMessage }) => (haveMessage !== null ? "8px" : "0px")};

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
`;

const ShareBorder = styled.div`
  width: 100%;
  &:before {
    content: "";
    display: inline-block;
    width: 36%;
    height: auto;
    margin-right: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: translateY(-6px);
  }

  &:after {
    content: "";
    display: inline-block;
    width: 36%;
    height: auto;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: translateY(-6px);
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  .iconSize {
    width: 40px;
    height: 40px;
  }
`;

const HaveMessageButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;
