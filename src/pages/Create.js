import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "../components/shared/theme.css";

import AppLayout from "../components/layout/AppLayout";

const Create = () => {
  const myWish = useRef(); // 내 소원 textarea
  const otherWish = useRef(); // 다른 소원 textarea

  const [comeTrue, setComeTrue] = useState({
    otherWishId: 1,
    content: "내 소원",
    cheerUp: "다른사람 소원",
  });
  const [data, setData] = useState("");
  // 서버에서 받아온 값을 담은 변수

  const [myTypingNum, setMyTypingNum] = useState("");
  // 내 소원 textarea의 변경 이벤트를 감지하는 변수

  const [otherTypingNum, setOtherTypingNum] = useState("");
  // 다른 사람 소원 textarea의 변경 이벤트를 감지하는 변수

  const myWishHolder = `선택한 키워드와 관련해서 이루고 
싶은 것을 마음껏 솔직하게
털어놓아주세요.`;
  // 띄어쓰기 다 되어 있는겁니다. 수정 자제 부탁드립니다.

  const otherWishHolder = `진심어린 응원을 부탁드려요.다른 분도
${"000"}님의 소원을 익명으로 전달받아 따뜻한
응원을 해주실 거에요.`;
  // 띄어쓰기 다 되어 있는겁니다. 수정 자제 부탁드립니다. ${} 안에는 서버에서 받아온 이름 넣어야 합니다.

  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/bujeok-management/bujeok")
    //   .then((res) => console.log(res));
  }, []);

  const handleMyWishText = (e) => {
    // 내 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setMyTypingNum(e.target.value);
  };

  const handleTextOtherWish = (e) => {
    // 상대방 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setOtherTypingNum(e.target.value);
  };

  const checkGET = () => {
    // axios
    //   .get("http://localhost:8080/bujeok-management/bujeok")
    //   .then((res) => console.log(res));
  };

  const checkPost = () => {
    const result = {
      otherWishId: 1,
      content: myWish.current.value,
      cheerUp: otherWish.current.value,
    };

    console.log(result);
    // axios
    //   .get("http://localhost:8080/bujeok-management/bujeok")
    //   .then((res) => console.log(res));
  };
  return (
    <div className="Create">
      <AppLayout>
        <TitleLarge>
          {/* data.name */}
          000님이 2023년에 이루고 싶은
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
          다른 분은 이런 소원을 빌었답니다! <br />
          소원이 꼭 이루어지도록 응원의 메세지를
          <br />
          남겨주세요.
        </TitleLarge>
        <OtherWishText>
          코시국도 많이 풀렸겠다 꼭 여러 곳으로 여행을 다니고 싶어요. 특히
          북유럽 한달 여행! 다양한 것들을 보고 느끼는 2023년이 되길...
        </OtherWishText>
        <TextBox
          col="25"
          row="3"
          maxLength={160}
          placeholder={otherWishHolder}
          ref={otherWish}
          onChange={(e) => handleTextOtherWish(e)}
        ></TextBox>
        <TextLength>{otherTypingNum.length}/160</TextLength>
        <BujeokBtn onClick={checkPost}>
          <Link to="/loading">소원아 이루어져라!</Link>
        </BujeokBtn>
      </AppLayout>
    </div>
  );
};

export default Create;

const TitleLarge = styled.div`
  width: 327px;
  margin: 37px 24px 24px;
  text-align: left;
  padding: 12px 16px;
  color: white;
  border-radius: 4px;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  letter-spacing: -0.07em;
`;

const TextBox = styled.textarea`
  box-sizing: border-box;
  border-radius: 4px;
  width: 327px;
  height: 100px;
  padding: 12px 16px;
  border: none;
  outline-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  letter-spacing: -0.07em;
  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: none;
  }
`;

const BujeokBtn = styled.button`
  background-color: #da234f;
  color: white;
  width: 327px;
  height: 56px;
  border-radius: 10px;
  border: none;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: center;
  letter-spacing: -0.07em;

  a {
    text-decoration: none;
    color: white;
  }
`;

const OtherWishText = styled.div`
  /* border: 1px solid white; */
  box-sizing: border-box;
  width: 327px;
  height: 100px;
  background-color: #524eff;
  color: white;
  padding: 12px 16px;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 8px;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 22px */
  /* text-align: center; */
  letter-spacing: -0.07em;
`;

const TextLength = styled.p`
  width: 327px;
  border: none;
  color: white;

  font-family: "Hahmlet";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  text-align: right;
  letter-spacing: -0.07em;
`;
