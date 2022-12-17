import React from "react";
import styled from "styled-components";

import AppLayout from "../components/layout/AppLayout";
import bujeok from "../assets/img/로딩이미지.svg";

const Loading = (props) => {
  const screen = document.getElementById("screen");

  const clickScreen = () => {
    screen.onclick();
  };

  console.log(screen);

  return (
    <div className="loading">
      <AppLayout>
        <LoadingContainer>
          <img src={bujeok} alt="새해 부적" />
          <MakeBujeok>부적 제작하는 중...</MakeBujeok>
        </LoadingContainer>
        {/* <LoadingImg id="screen"></LoadingImg> */}
      </AppLayout>
    </div>
  );
};

export default Loading;

const LoadingContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
`;

const MakeBujeok = styled.div`
  margin-top: 10px;
  color: white;
`;
