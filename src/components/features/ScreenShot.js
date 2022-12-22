import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

import DefaultImage from "../../assets/img/DefaultBujeokImg.svg";
import DefaultImageNoneMessage from "../../assets/img/DefaultImgNoneMessage.svg";

export const onSaveAs = (url, fillName) => {
  let link = document.createElement("a");
  document.body.appendChild(link);
  link.href = url;
  link.download = fillName;
  link.click();
  document.body.removeChild(link);
};

export const handleScreenShot = () => {
  html2canvas(document.getElementById("div")).then((canvas) => {
    onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
  });
};

export const ScreenShot = ({ HopeImg, boolean, text }) => {
  const [supporter, setSupporter] = useState(true);
  const [haveMessage, setHaveMessage] = useState(false);
  // boolean 값은 메세지 유무를 보내줘야함.
  // 메세지가 있으면 HopeImg 가 나오고, 없으면 defaultImg 가 나옴

  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };
  return (
    <Container>
      <Div id="div">
        {haveMessage ? (
          <>
            <BujeokImgContainer
              onClick={handleChangeSupporterImg}
              src={supporter ? DefaultImage : DefaultImageNoneMessage}
              alt="noneMessage"
            />
          </>
        ) : // 응원 메세지가 없을때
        supporter ? ( // 응원메세지가 있을 때,
          <BujeokImgContainer
            onClick={handleChangeSupporterImg}
            src={DefaultImage}
            alt="haveMessage"
          /> // 응원메세지가 있고, 기본이미지
        ) : (
          <TextWrapper onClick={handleChangeSupporterImg}>
            <BujeokText>{text}</BujeokText>
          </TextWrapper>
        )}
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 20px 0px;
  padding-bottom: 10px;
`;

const Div = styled.div``;

const BujeokImgContainer = styled.img`
  width: 272px;
  height: 272px;
  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  background-color: #6fa4f2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 272px;
  box-sizing: border-box;
`;

const BujeokText = styled.pre`
  line-height: 120%;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.07em;

  box-sizing: border-box;

  white-space: pre-wrap;
  color: white;
  margin: 0 23px;
`;
