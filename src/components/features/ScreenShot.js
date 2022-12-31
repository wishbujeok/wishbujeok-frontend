import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import axios from "axios";

export const onSaveAs = (url, fillName) => {
  console.log(url);
  console.log(fillName);
  let link = document.createElement("a");
  document.body.appendChild(link);
  link.href = url;
  link.download = fillName;
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
  }, 1000);
};

export const handleScreenShot = (url, item) => {
  console.log(item);
  console.log(url);
  // if (item === true) {
  html2canvas(document.getElementById("div")).then((canvas) => {
    console.log(canvas);
    onSaveAs(canvas.toDataURL(), "image-download.png");
  });
  // } else {
  //   let result = document.getElementById("div");
  //   console.log(result.toDataURL("image/png"));
  //   // onSaveAs(result.toDataURL("image/png"), "image-download.png");
  // }
};

export const imgData = (url) => {
  axios
    .get(`url`)
    .then((res) => {
      res.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "소원부적";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 2000);
      a.remove();
    });
};

export const ScreenShot = ({
  message,
  imgUrl,
  color,
  supporter,
  setSupporter,
}) => {
  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };

  return (
    <Container>
      <Div id="div">
        {message === null || message === undefined ? (
          supporter ? (
            <>
              <BujeokImgContainer
                onClick={handleChangeSupporterImg}
                src={imgUrl}
                alt="noneMessage"
                // id="backImg"
              />
              {/* <ImgBackground
                img={imgUrl}
                onClick={handleChangeSupporterImg}
                id="backImg"
              ></ImgBackground> */}
            </>
          ) : (
            <TextWrapper onClick={handleChangeSupporterImg} bgc={color}>
              <BujeokText color={"none"} id="backImg">
                응원 메세지가
                <br />
                아직 도착하지 않았어요
              </BujeokText>
            </TextWrapper>
          )
        ) : supporter ? (
          <>
            <BujeokImgContainer
              onClick={handleChangeSupporterImg}
              src={imgUrl}
              alt="haveMessage"
              id="backImg"
            />
          </>
        ) : (
          // <ImgBackground
          //   onClick={handleChangeSupporterImg}
          //   img={imgUrl}
          //   id="backImg"
          // ></ImgBackground>
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

  border: 1px solid white;
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
  width: 275px;
  /* height: 275px; */

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
  font-family: "Hahmlet-Regular";

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
