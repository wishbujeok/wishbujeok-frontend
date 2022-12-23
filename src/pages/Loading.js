import React from "react";
import styled from "styled-components";

import bujeok from "../assets/img/LoadingImg.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { BooleanData } from "../components/reducer/ImgAction";
// import store from "./../components/shared/store";

const Loading = () => {
  // const dispatch = useDispatch(BooleanData(true));

  // const handleCheckData = () => {
  //   dispatch(BooleanData({ type: "result" }));
  //   console.log(store.getState().ImgReducer);
  // };

  return (
    <div className="loading">
      {/* <button onClick={handleCheckData}>check</button> */}
      <LoadingContainer>
        <LoadingImg src={bujeok} alt="새해 부적" />
        <MakeBujeok>부적 제작하는 중...</MakeBujeok>
      </LoadingContainer>
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

const LoadingImg = styled.img`
  width: 200px;
  height: 200px;
`;

const MakeBujeok = styled.div`
  margin-top: 10px;
  color: white;
`;
