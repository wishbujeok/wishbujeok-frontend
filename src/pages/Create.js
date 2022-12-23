import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import "../components/shared/theme.css";
import { setAuthorization } from "../stores/Token";

const Create = () => {
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    setAuthorization(sessionStorage.getItem("accessToken"));
  }
  // redux .. 왜 해줬을까? 이거?
  const user = useSelector((state) => state.user.value);

  const myWish = useRef(); // 내 소원 textarea
  const otherWish = useRef(); // 다른 소원 textarea
  const [getData, setGetData] = useState({
    // userName: "check asyne",
    // 현준님 이거 어떻게 가지고 오나요 ? ㅎㅎ,,
  });
  // 서버에서 받아온 값을 담은 변수

  // const [comeTrue, setComeTrue] = useState({
  //   otherWishId: 1,
  //   content: "내 소원",
  //   cheerUp: "다른사람 소원",
  // });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/bujeok-management/bujeok`)
      // 토큰값을 안보내서 get 요청이 안오는듯.
      .then((res) => {
        console.log(res.data);
        // setGetData(res.data.response)
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(getData);

  const [myTypingNum, setMyTypingNum] = useState("");
  // 내 소원 textarea의 변경 이벤트를 감지하는 변수

  const [otherTypingNum, setOtherTypingNum] = useState("");
  // 다른 사람 소원 textarea의 변경 이벤트를 감지하는 변수

  const myWishHolder = `이루고 싶은 것이라면 무엇이든 털어놓아 주세요.`;
  // 띄어쓰기 다 되어 있는겁니다. 수정 자제 부탁드립니다.

  const otherWishHolder = `응원 메시지를 남기면 ${getData.userName}님의 소원도
익명으로 전달되어 응원 메시지를 받게 돼요.`;
  // 띄어쓰기 다 되어 있는겁니다. 수정 자제 부탁드립니다. ${} 안에는 서버에서 받아온 이름 넣어야 합니다.

  const handleMyWishText = (e) => {
    // 내 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setMyTypingNum(e.target.value);
  };

  const handleTextOtherWish = (e) => {
    // 상대방 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setOtherTypingNum(e.target.value);
  };

  const checkPost = () => {
    const result = {
      otherWishId: 1,
      content: myWish.current.value,
      cheerUp: otherWish.current.value,
    };

    console.log(result);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/bujeok-management/bujeok`,
        result
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  if (getData === null) {
    return;
  }

  return (
    <div className="Create">
      <TitleLarge>
        {getData.userName}
        님이 2023년에 이루고 싶은
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
        <TextBox
          col="25"
          row="3"
          maxLength={160}
          placeholder={otherWishHolder}
          ref={otherWish}
          onChange={(e) => handleTextOtherWish(e)}
        ></TextBox>
        <TextLength>{otherTypingNum.length}/160</TextLength>
        {/* <Link to="/create">
          <Button onClick={checkGET} title="소원아 이루어져라!" page="loading" />
        </Link> */}
      </CheerUpText>
      <BujeokBtn onClick={checkPost}>
        {/* <Link to="/loading"> */}
        소원아 이루어져라!
        {/* </Link> */}
      </BujeokBtn>
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

// 세 줄 이상 넘어가면 스크롤 되게끔 구현.
// pre 태그 사용하면 되긴 함.
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
