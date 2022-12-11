import React from "react";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import "../components/shared/theme.css";
import bujeok from "../assets/img/로딩이미지.svg";

const Confirm = () => {
  return (
    <div className="Create">
      <AppLayout>
        <TitleLarge>부적이 도착했어요!</TitleLarge>
        {/* 임시로 해놓았습니다. */}
        <LoadingImg src={bujeok} alt="새해 부적" />
        <BodyLarge>눌러서 뒷면을 확인해 보세요.</BodyLarge>
      </AppLayout>
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
