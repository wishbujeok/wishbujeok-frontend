import React from "react";
import styled from "styled-components";

import bujeok from "../assets/img/로딩이미지.svg";

const Loading = (props) => {
  const screen = document.getElementById("screen");

  const clickScreen = () => {
    screen.onclick();
  };

  console.log(screen);

  return (
    <div className="loading">
<<<<<<< HEAD
      <AppLayout>
        <LoadingContainer>
          <img src={bujeok} alt="새해 부적" />
          <MakeBujeok>부적 제작하는 중...</MakeBujeok>
        </LoadingContainer>
        {/* <LoadingImg id="screen"></LoadingImg> */}
      </AppLayout>
=======
      <LoadingContainer>
        <LoadingImg src={bujeok} alt="새해 부적" />
        <MakeBujeok>부적 제작하는 중...</MakeBujeok>
      </LoadingContainer>
>>>>>>> 8435f23a6718b07854f13fae8c5fa4f67ddc796b
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
