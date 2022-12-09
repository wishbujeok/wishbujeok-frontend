import React from "react";
import styled from "styled-components";

import AppLayout from "../components/layout/AppLayout";
import bujeok from "../assets/img/로딩이미지.svg";

const Loading = () => {
  return (
    <div className="loading">
      <AppLayout>
        <LoadingContainer>
          <LoadingImg src={bujeok} alt="새해 부적" />
          <MakeBujeok>부적 제작하는 중...</MakeBujeok>
        </LoadingContainer>
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

  /* border: 1px solid white; */
`;

const LoadingImg = styled.img``;

const MakeBujeok = styled.div`
  margin-top: 10px;
  color: white;
`;
