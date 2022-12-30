import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../components/shared/theme.css";
import { setAuthorization } from "../stores/Token";

const Create = () => {
  const navigate = useNavigate();

  if (axios.defaults.headers.common["Authorization"] === undefined) {
    setAuthorization(sessionStorage.getItem("accessToken"));
  }

  const myWish = useRef();
  const otherWish = useRef();
  const [getData, setGetData] = useState({
    userName: "async",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/bujeok`)
      // 토큰값을 안보내서 get 요청이 안오는듯.
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("accessToken")}`;
        // console.log(res.data);
        setGetData(res.data.response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
        console.log(err.config);
      });
  }, []);

  const [myTypingNum, setMyTypingNum] = useState("");
  const [otherTypingNum, setOtherTypingNum] = useState("");

  const myWishHolder = `이루고 싶은 것이라면 무엇이든 털어놓아 주세요.`;

  const otherWishHolder = `응원 메시지를 남기면 ${getData.userName}소원도
익명으로 전달되어 응원 메시지를 받게 돼요.`;

  const handleMyWishText = (e) => {
    setMyTypingNum(e.target.value);
  };

  const handleTextOtherWish = (e) => {
    setOtherTypingNum(e.target.value);
  };

  const checkPost = () => {
    const result = {
      otherWishId: 0,
      content: myWish.current.value,
      cheerUp: otherWish.current.value,
    };

    console.log(result);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/bujeok-management/bujeok`,
        result
      )
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${sessionStorage.getItem("accessToken")}`;
        navigate("/confirm");
      })
      .catch((err) => console.log(err));
  };

  if (getData === null) {
    return;
  }

  return (
    <div className="Create">
      <TitleLarge>
        {getData.userName}님이 2023년에 이루고 싶은
        <br />
        소원을 말해주세요.
      </TitleLarge>
      <TextBox
        placeholder={myWishHolder}
        col="25"
        row="3"
        maxLength={160}
        ref={myWish}
        onChange={(e) => handleMyWishText(e)}
      ></TextBox>
      <TextLength>{myTypingNum.length}/160</TextLength>
      <TitleLarge>
        다른 분은 이런 소원을 빌었어요! <br />
        진심 어린 응원의 메시지를 남겨주세요.
      </TitleLarge>
      <CheerUpText>
        <OtherWishText>{getData.otherWish}</OtherWishText>
        {/* <OtherWishText>테스트입니다</OtherWishText> */}
        <TextBox
          col="25"
          row="3"
          maxLength={160}
          placeholder={otherWishHolder}
          ref={otherWish}
          onChange={(e) => handleTextOtherWish(e)}
        ></TextBox>
        <TextLength>{otherTypingNum.length}/160</TextLength>
      </CheerUpText>
      <BujeokBtn onClick={checkPost}>소원아 이루어져라!</BujeokBtn>
    </div>
  );
};

export default Create;

const TitleLarge = styled.div`
  width: 100%;
  height: 100%;
  margin: 37px 12px 24px 0px;
  text-align: left;

  color: #f7f7f7;
  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.07em;
`;

const TextBox = styled.textarea`
  box-sizing: border-box;
  border: 0.75px solid #f7f7f7;
  border-radius: 4px;
  padding: 12px 12px;
  width: 100%;
  height: 100px;
  outline-color: rgba(255, 255, 255, 0.1);
  background: border-box;

  color: #f7f7f7;
  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.07em;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: none;
  }
`;

const CheerUpText = styled.div`
  width: 327px;
  flex-direction: column;
`;

const BujeokBtn = styled.button`
  background-color: #da234f;
  color: white;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  margin-top: 81px;

  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.07em;

  a {
    text-decoration: none;
    color: white;
  }
`;

const OtherWishText = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #f7f7f7;
  padding: 12px 16px;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 8px;
  display: inline-block;

  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.07em;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TextLength = styled.p`
  width: 100%;
  color: #ffffff;
  font-family: "Hahmlet-Regular";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  letter-spacing: -0.07em;
`;
