import React, { useState, useEffect } from "react";
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

export const ScreenShot = ({ message, imgUrl, color }) => {
  const [supporter, setSupporter] = useState(true);
  const [defaultMessage, setDefaultMessage] = useState(
    "응원 메세지가 아직 도착하지 않았어요"
  );

  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };

  // useEffect(() => {
  //   const newMessage = message;
  //   const result = newMessage.replaceAll(/\n/gi, <br />);
  //   setDefaultMessage(result);
  //   console.log(defaultMessage);
  // }, []);
  // console.log(defaultMessage);

  console.log(message);

  return (
    <Container>
      <Div id="div">
        {message === null ? (
          supporter ? (
            <>
              <BujeokImgContainer
                onClick={handleChangeSupporterImg}
                src={DefaultImage}
                alt="noneMessage"
              />
            </>
          ) : (
            <TextWrapper onClick={handleChangeSupporterImg}>
              <BujeokText>응원 메세지가 아직 도착하지 않았어요</BujeokText>
            </TextWrapper>
          )
        ) : supporter ? ( // 응원메세지가 있을 때,
          <BujeokImgContainer
            onClick={handleChangeSupporterImg}
            src={
              DefaultImage
              // imgUrl
            }
            alt="haveMessage"
          /> // 응원메세지가 있고, 기본이미지
        ) : (
          <TextWrapper bgc={color} onClick={handleChangeSupporterImg}>
            <BujeokText>{message}</BujeokText>
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
  /* background-color: ${({ bgc }) => (bgc !== undefined ? bgc : "#6FA4F2")}; */
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
  overflow: auto;
  white-space: pre-wrap;

  line-height: 120%;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.07em;

  box-sizing: border-box;

  white-space: pre-wrap;
  color: white;
  margin: 0 23px;
`;
