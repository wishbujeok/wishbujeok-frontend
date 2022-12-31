import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

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

export const handleScreenShotImg = (url) => {
  console.log("이미지 저장함수 url : ", url);
  html2canvas(document.getElementById("div")).then((canvas) => {
    onSaveAs(canvas.toDataURL(url), "image-download.png");
  });
};

export const ScreenShot = ({
  message,
  imgUrl,
  color,
  setSupporter,
  supporter,
}) => {
  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };

  console.log(message);
  console.log(imgUrl);

  return (
    <Container>
      <Div
        // id={supporter === false ? "div" : ""}
        id="div"
      >
        {message === null || message === undefined ? (
          supporter ? (
            <>
              {/* <BujeokImgContainer
                onClick={handleChangeSupporterImg}
                src={imgUrl}
                alt="noneMessage"
                id={supporter ? "div" : ""}
              /> */}
              <ImgBackground
                img={imgUrl}
                onClick={handleChangeSupporterImg}
                // id={supporter ? "div" : ""}
              ></ImgBackground>
            </>
          ) : (
            <TextWrapper onClick={handleChangeSupporterImg} bgc={color}>
              <BujeokText color={"none"}>
                응원 메세지가
                <br />
                아직 도착하지 않았어요
              </BujeokText>
            </TextWrapper>
          )
        ) : supporter ? (
          // <BujeokImgContainer
          //   onClick={handleChangeSupporterImg}
          //   src={imgUrl}
          //   alt="haveMessage"
          //   id={supporter ? "div" : ""}
          // />
          <ImgBackground
            onClick={handleChangeSupporterImg}
            // id={supporter ? "div" : ""}
            img={imgUrl}
          ></ImgBackground>
        ) : (
          <TextWrapper bgc={color} onClick={handleChangeSupporterImg}>
            <BujeokText>{message}</BujeokText>
          </TextWrapper>
        )}
      </Div>
    </Container>
  );
};

const ImgBackground = styled.div`
  background-image: ${({ img }) =>
    img !== null || img !== undefined ? `url(${img})` : null};
  background-size: cover;
  width: 272px;
  height: 272px;

  /* border: 1px solid white; */
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 20px 0px;
`;

const Div = styled.div`
  width: 272px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BujeokImgContainer = styled.img`
  width: 272px;
  height: 272px;
  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  background-color: ${({ bgc }) => (bgc !== undefined ? bgc : "#6FA4F2")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 272px;
  box-sizing: border-box;
`;

const BujeokText = styled.pre`
  & {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  box-sizing: border-box;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: auto;
  white-space: pre-wrap;

  line-height: 120%;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.07em;

  box-sizing: border-box;

  white-space: pre-wrap;
  color: ${({ color }) =>
    color === "none" ? "rgba(247,247,247,0.5)" : "#f7f7f7f7"};
  margin: 0 23px;
`;
