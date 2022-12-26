import axios from "axios";

// 1. axios 인터셉터 생성
export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: false,
});

// 2. 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("accessToken");
    if (Token === "") {
      window.alert("로그인 먼저 해주십숑");
      return config;
    }
    config.headers = {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${Token}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

//3. 응답 인터셉터
instance.interceptors.response.use(
  (success) => {
    const response = success.data;
    if (response.status === 200 && response.responseMessage === "조회 성공") {
      return response.posts;
    }
    return success;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 403) {
      window.alert("권한이 없습니다.");
    }
    return error;
  }
);

export const TokenCheck = localStorage.getItem("accessToken") ? true : false;
