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

export const ScreenShot = ({ message, imgUrl, color }) => {
  const [supporter, setSupporter] = useState(true);

  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };

  console.log(message);

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
              />
            </>
          ) : (
            <TextWrapper onClick={handleChangeSupporterImg} bgc={color}>
              <BujeokText>
                응원 메세지가
                <br />
                아직 도착하지 않았어요
              </BujeokText>
            </TextWrapper>
          )
        ) : supporter ? (
          <BujeokImgContainer
            onClick={handleChangeSupporterImg}
            src={imgUrl}
            alt="haveMessage"
          />
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
  /* padding-bottom: 10px; */
`;

const Div = styled.div`
  width: 275px;
  height: 275px;
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
  color: white;
  margin: 0 23px;
`;
