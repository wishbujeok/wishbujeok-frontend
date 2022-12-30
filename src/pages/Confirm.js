import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  ScreenShot,
  handleScreenShot,
} from "../components/features/ScreenShot";

import { SiInstagram } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

// 카카오톡 공유할 때 이미지 넣어놓은 것.
// import { mainPageImg } from "../assets/img/mainPageImg.svg";

import "../components/shared/theme.css";
import KakaoLogin from "../components/features/KakaoLogin";

const Confirm = () => {
  const [userData, setUserData] = useState([]);
  const [reply, setReply] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/reply`)
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("accessToken")}`;
        setUserData(res.data.response);
        setReply(res.data.response.reply);
      });
  }, []);
  console.log(userData);

  const handleSaveImg = () => {
    handleScreenShot();
  };

  const handleShareInstar = () => {
    window.open("https://www.instagram.com/");
  };

  const handleShareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
        // SDK 초기화 여부를 확인.
        console.log(window.Kakao.isInitialized());
      }
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "새해부적",
          description: "부적을 만들어 보아요!",
          imageUrl: "mainPageImg",
          link: {
            mobileWebUrl: "https://wishbujeok.site",
            webUrl: "https://wishbujeok.site",
          },
        },
        buttons: [
          {
            title: "친구 부적 확인",
            link: {
              mobileWebUrl: "https://wishbujeok.site/confirm",
              webUrl: "https://wishbujeok.site/confirm",
            },
          },
          {
            title: "나의 부적만들기",
            link: {
              mobileWebUrl: "https://wishbujeok.site",
              webUrl: "https://wishbujeok.site",
            },
          },
        ],
      });
    }
  };

  // 응원다시받기 onclick 후 일어나는 일.
  const handleRequest = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/reply`)
      .then((data) => setUserData(data));
  };

  console.log(userData);

  const message = `안녕하세요(줄바꿈)
  저는 양현준입니다.(줄바꿈)
  띄어쓰기가 제대로 작동하는지 궁금해요.(줄바꿈)
  지금까지 3번띄어쓰기를 했습니다.`;
  return (
    <div className="Confirm">
      {userData.reply === null ? (
        <>
          <TitleLarge>부적이 도착했어요!</TitleLarge>
          <ScreenShot message={userData.reply} imgUrl={userData.backUrl} />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>{userData.userName}님이 빌었던 소원이에요.</TitleSmall>
            <Content>{userData.content}</Content>
            <BujeokBtn bgc={"#DA234F"} width={"100%"} onClick={handleSaveImg}>
              부적 저장하기
            </BujeokBtn>
            <Share>
              <ShareBorder>공유하기</ShareBorder>
              <Social>
                <IconWrapper onClick={handleShareInstar}>
                  <SiInstagram className="iconSize" />
                </IconWrapper>
                <IconWrapper>
                  <RiKakaoTalkFill
                    onClick={handleShareKakao}
                    className="iconSize"
                  />
                </IconWrapper>
              </Social>
            </Share>
          </Wish>
        </>
      ) : (
        <>
          <TitleLarge>응원 메세지가 도착했어요!</TitleLarge>
          <ScreenShot imgUrl={userData.backUrl} message={message} />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>{userData.userName}님이 빌었던 소원이에요.</TitleSmall>
            <Content>{userData.content}</Content>
            <HaveMessageButtonContainer>
              <BujeokBtn
                haveMessage={userData.reply}
                border={"red"}
                bgc={"black"}
                color={"#DA234F"}
                width={"183px"}
                onClick={handleRequest}
              >
                응원 메세지 다시받기
              </BujeokBtn>
              <BujeokBtn
                haveMessage={userData.reply}
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
                  <SiInstagram
                    onClick={handleShareInstar}
                    className="iconSize"
                  />
                </IconWrapper>
                <IconWrapper>
                  <RiKakaoTalkFill
                    onClick={handleShareKakao}
                    className="iconSize"
                  />
                </IconWrapper>
              </Social>
            </Share>
          </Wish>
        </>
      )}
    </div>
  );
};

export default Confirm;

const TitleLarge = styled.div`
  color: white;
  font-family: "Hahmlet-Regular";
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
  font-family: "Hahmlet-Regular";
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 2vh;
`;

const Wish = styled.div`
  width: 327px;
  flex-direction: column;
`;

const TitleSmall = styled.div`
  width: 100%;

  color: #f7f7f7;
  font-family: "Hahmlet-Regular";
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 6vh;
  display: flex;
  text-align: left;
`;

const Content = styled.pre`
  overflow: auto;
  white-space: pre-wrap;

  color: #f7f7f7;
  margin-top: 2vh;
  padding: 12px 16px 16px;

  box-sizing: border-box;
  width: 100%;
  height: 76px;
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
  box-sizing: border-box;
  background-color: ${({ bgc }) => (bgc === "black" ? "black" : bgc)};
  color: white;
  width: ${(width) => (width ? width : "100%")};
  height: 56px;
  border-radius: 10px;
  border: ${({ border }) => (border === "red" ? "1px solid red" : "none")};
  margin-top: 8vh;
  margin-right: ${({ haveMessage }) => (haveMessage !== null ? "8px" : "0px")};

  font-family: "Hahmlet-Regular";
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
  width: 100%;
  font-family: "Hahmlet-Regular";
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
    border: 1.5px solid rgba(247, 247, 247, 0.2);
    transform: translateY(-6px);
  }

  &:after {
    content: "";
    display: inline-block;
    width: 36%;
    height: auto;
    margin-left: 10px;
    border: 1.5px solid rgba(247, 247, 247, 0.2);
    transform: translateY(-6px);
  }
`;

const Social = styled.div`
  width: 100%;
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

  background-color: rgba(255, 255, 255, 0.1);
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
