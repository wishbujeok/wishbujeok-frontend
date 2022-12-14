import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  ScreenShot,
  handleScreenShot,
  imgData,
} from "../components/features/ScreenShot";

import { SiInstagram } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { RxReload } from "react-icons/rx";

import "../components/shared/theme.css";

const Confirm = () => {
  const [userData, setUserData] = useState([]);
  const [supporter, setSupporter] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/reply`)
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("accessToken")}`;
        setUserData(res.data.response);
      });
  }, []);
  console.log(userData);

  const handleShareInstar = () => {
    window.open("https://www.instagram.com/");
  };

  const handleShareKakao = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
        console.log(window.Kakao.isInitialized());
      }
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        itemContent: {
          profileText: "새해부적",
          profileImageUrl:
            "https://cdn.discordapp.com/attachments/1044794430068101133/1058334042027737198/wishbujeok_kakao_profile.png",
        },
        content: {
          title: "2023년, 소원아 이루어져라!",
          description:
            "소원을 적으면 다른 사람의 응원 메시지가 담긴 부적을 받을 수 있어요.",
          imageUrl:
            "https://cdn.discordapp.com/attachments/1044794430068101133/1058334041646051398/wishbujeok_kakao_main.png",
          link: {
            mobileWebUrl: "https://wishbujeok.site",
            webUrl: "https://wishbujeok.site",
          },
        },
        buttons: [
          {
            title: "부적 받으러 가기",
            link: {
              mobileWebUrl: "https://wishbujeok.site",
              webUrl: "https://wishbujeok.site",
            },
          },
        ],
      });
    }
  };

  const handleRequest = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/reply`)
      .then((data) => {
        console.log(data);
        setUserData(data.data.response);
      });
  };

  console.log(userData);

  return (
    <div className="Confirm">
      {userData.reply === null || userData.reply === undefined ? (
        <>
          <TitleLarge>부적이 도착했어요!</TitleLarge>
          <ScreenShot
            message={userData.reply}
            imgUrl={userData.imgURL}
            color={userData.backColor}
            supporter={supporter}
            setSupporter={setSupporter}
          />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>{userData.userName}님이 빌었던 소원이에요.</TitleSmall>
            <Content>{userData.content}</Content>
            <BujeokBtn
              bgc={"#DA234F"}
              width={"100%"}
              onClick={() => handleScreenShot(userData.imgURL, supporter)}
            >
              부적 저장하기
              <FiDownload className="downloadIcon" />
            </BujeokBtn>
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
      ) : (
        <>
          <TitleLarge>응원 메세지가 도착했어요!</TitleLarge>
          <ScreenShot
            imgUrl={userData.imgURL}
            message={userData.reply}
            color={userData.backColor}
            supporter={supporter}
            setSupporter={setSupporter}
          />
          <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
          <Wish>
            <TitleSmall>{userData.userName}님이 빌었던 소원이에요.</TitleSmall>
            <Content>{userData.content}</Content>
            <HaveMessageButtonContainer>
              <BujeokBtnReMessage onClick={handleRequest}>
                응원 메세지 다시받기
                <RxReload className="reLender" />
              </BujeokBtnReMessage>
              <BujeokBtn
                haveMessage={userData.reply}
                bgc={"#DA234F"}
                color={"white"}
                width={"136px"}
                onClick={() => handleScreenShot(userData.imgURL, supporter)}
              >
                부적 저장하기
                <FiDownload className="downloadIcon" />
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
  font-size: 1.5em;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.07em;
  margin-top: 10vh;
  text-size-adjust: auto;
`;

const BodyLarge = styled.div`
  color: rgba(247, 247, 247, 0.5);
  font-family: "Hahmlet-Regular";
  font-size: 1em;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  text-size-adjust: auto;
`;

const Wish = styled.div`
  width: 327px;
  flex-direction: column;
`;

const TitleSmall = styled.div`
  width: 100%;

  color: #f7f7f7;
  font-family: "Hahmlet-Regular";
  font-size: 1.125em;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.07em;
  margin-top: 6vh;
  display: flex;
  text-align: left;
  text-size-adjust: auto;
`;

const Content = styled.pre`
  & {
    ::-webkit-scrollbar {
      display: none;
    }
  }
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
  font-size: 1em;
  line-height: 150%;
  letter-spacing: -0.07em;
  text-size-adjust: auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BujeokBtn = styled.button`
  flex-basis: 50%;
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
  font-size: 1em;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.07em;
  text-size-adjust: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .downloadIcon {
    font-size: 1em;
    color: #ffffff;
    margin-left: 5px;
    transform: translateY(3px);
    text-size-adjust: auto;
  }

  .reLender {
    font-size: 1em;
    color: #da234f;
    margin-left: 5px;
    transform: translateY(1px);
    text-size-adjust: auto;
  }
`;

const Share = styled.div`
  width: 100%;
  font-family: "Hahmlet-Regular";
  font-weight: 400;
  font-size: 1.125em;
  line-height: 150%;
  letter-spacing: -0.07em;
  text-align: center;
  color: white;
  margin-top: 6vh;
  text-size-adjust: auto;
`;

const ShareBorder = styled.div`
  width: 100%;
  &:before {
    content: "";
    display: inline-block;
    width: 36%;
    height: 1.5px;
    margin-right: 10px;
    /* border: 1.5px solid rgba(247, 247, 247, 0.2); */
    background-color: rgba(247, 247, 247, 0.2);
    transform: translateY(-6px);
  }

  &:after {
    content: "";
    display: inline-block;
    width: 36%;
    height: 1.5px;
    margin-left: 10px;
    /* border: 1.5px solid rgba(247, 247, 247, 0.2); */
    background-color: rgba(247, 247, 247, 0.2);
    transform: translateY(-6px);
  }
`;

const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 50px;
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

const BujeokBtnReMessage = styled.button`
  box-sizing: border-box;
  background-color: black;
  color: red;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: 1px solid #da234f;
  margin-top: 8vh;
  margin-right: 8px;

  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.07em;
  text-size-adjust: auto;

  flex-basis: 60%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .downloadIcon {
    font-size: 1em;
    color: #ffffff;
    margin-left: 5px;
    transform: translateY(3px);
    text-size-adjust: auto;
  }

  .reLender {
    font-size: 1em;
    color: #da234f;
    margin-left: 5px;
    transform: translateY(1px);
    text-size-adjust: auto;
  }
`;
