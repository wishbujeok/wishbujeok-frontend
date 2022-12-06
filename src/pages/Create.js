import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import AppLayout from "../components/layout/AppLayout";

const Create = () => {
  const [data, setData] = useState("");
  // 서버에서 받아온 값을 담은 변수

  const [myTypingNum, setMyTypingNum] = useState(0);
  // 내 소원 textarea의 변경 이벤트를 감지하는 변수

  const [otherTypingNum, setOtherTypingNum] = useState(0);
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
    // axios.get("").then((res) => setData(res));
  }, []);

  const handleMyWishText = (e) => {
    // 내 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setMyTypingNum(e.target.value);
  };

  const handleTextOtherWish = (e) => {
    // 상대방 소원 textarea 에 글자수를 받아오기 위해 필요한 함수
    setOtherTypingNum(e.target.value);
  };

  return (
    <div className="Create">
      <AppLayout>
        <div>
          {/* data.name */}
          000님이 2023년에 이루고 싶은
          <br />
          소원을 말해주세요.
        </div>
        <div className="hello">
          <textarea
            className="textBox"
            placeholder={myWishHolder}
            col="25"
            row="3"
            maxLength={160}
            onChange={(e) => handleMyWishText(e)}
          ></textarea>
          <p>{myTypingNum.length}/160</p>
        </div>
        <div>
          <p>
            다른 분은 이런 소원을 빌었답니다! <br />
            소원이 꼭 이루어지도록 응원의 메세지를
            <br />
            남겨주세요.
          </p>
          <div>
            div테그는 삭제가능. 단, p 태그에 padding 을 준다는 조건으로..
            <p>여기에는 서버에서 받아온 데이터가 들어갑니다.</p>
          </div>
        </div>
        <textarea
          col="25"
          row="3"
          maxLength={160}
          placeholder={otherWishHolder}
          onChange={(e) => handleTextOtherWish(e)}
        ></textarea>
        <p>{otherTypingNum.length}/160</p>
        <Link to="/loading">소원아 이루어져라!</Link>
      </AppLayout>
    </div>
  );
};

export default Create;

const Container = styled.div``;
