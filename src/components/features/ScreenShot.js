import React, { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

import DefaultImage from "../../assets/img/DefaultBujeokImg.svg";
import DefaultImageNoneMessage from "../../assets/img/DefaultImgNoneMessage.svg";

const ScreenShot = ({ HopeImg, boolean }) => {
  const [supporter, setSupporter] = useState(true);
  const [haveMessage, setHaveMessage] = useState(true);
  // boolean 값은 메세지 유무를 보내줘야함.
  // 메세지가 있으면 HopeImg 가 나오고, 없으면 defaultImg 가 나옴

  const onSaveAs = (url, fillName) => {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = url;
    link.download = fillName;
    link.click();
    document.body.removeChild(link);
  };

  const handleScreenShot = () => {
    html2canvas(document.getElementById("div")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const handleChangeSupporterImg = () => {
    setSupporter(!supporter);
  };
  return (
    <Div id="div">
      {haveMessage ? (
        <BujeokImgContainer
          onClick={handleChangeSupporterImg}
          src={supporter ? DefaultImage : DefaultImageNoneMessage}
          alt="noneMessage"
        />
      ) : (
        <BujeokImgContainer
          onClick={handleChangeSupporterImg}
          src={supporter ? DefaultImage : HopeImg}
          alt="haveMessage"
        />
      )}
      <button onClick={handleScreenShot}>click</button>
    </Div>
  );
};

export default ScreenShot;

const Div = styled.div`
  width: 272px;
  height: 272px;
  background-color: #6fa4f2;
`;

const BujeokImgContainer = styled.img`
  width: 100%;
  height: 100%;
`;
