import { useLocation, useNavigate } from "react-router-dom";
// import { checkAccessToken } from "../../stores/Token";
import { useEffect, useState } from "react";
import { setAuthorization, setUseAccessToken } from "../../stores/Token";
// import { useDispatch } from "react-redux";
// import { loginAccount } from "../reducer/Reducer";
import axios from "axios";
// import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";

// const JWT_EXPIRE_TIME = 2 * 3600 * 1000; // expiration time(2 hours in milliseconds)

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    /*
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/kakao/login/?code=${KAKAO_CODE}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // 서버 전용 access refresh token
        sessionStorage.setItem("accessToken", res.response.accessToken);
        sessionStorage.setItem("refreshToken", res.response.refreshToken);
        console.log("kakaologin AccessToken " + res.response.accessToken);
        console.log("kakaoLogin RefreshToken " + res.response.refreshToken);
        console.log("kakaoLogin HasBujeok " + res.response.hasBujeok);
        // if (res.response.status === 200) {
        //   console.log("200성공");
        //   setAuthorization(res.response.accessToken);
        // }
        console.log("setAuthorization " + setAuthorization);
        console.log(
          `setAuthorization$$  + ${setAuthorization} or ${setAuthorization.token}`
        );
        setUseAccessToken(res.response.accessToken);
        console.log(setUseAccessToken);
        if (res.response.hasBujeok === false) {
          navigate("/create");
        } else {
          navigate("/confirm");
        }
      });
      */

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/auth/kakao/login?code=${KAKAO_CODE}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setGetData(res.data.response);

        // sessionStorage.setItem(setAccessToken, res.data.response.accessToken);
        // sessionStorage.setItem(setRefreshToken, res.data.response.refreshToken);
        // sessionStorage.setItem(setHasBujeok, res.data.response.hasBujeok);

        sessionStorage.setItem("accessToken", res.data.response.accessToken);
        sessionStorage.setItem("refreshToken", res.data.response.refreshToken);

        console.log("kakaologin AccessToken " + res.data.response.accessToken);
        console.log(
          "kakaoLogin RefreshToken " + res.data.response.refreshToken
        );
        console.log("kakaoLogin HasBujeok " + res.data.response.hasBujeok);

        setUseAccessToken(res.data.response.accessToken);
        setAuthorization(res.data.response.accessToken);
        if (res.data.response.hasBujeok === false) {
          navigate("/create");
        } else {
          navigate("/confirm");
        }
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
    console.log("stateAccess " + getData.accessToken);
    console.log("stateRefresh " + getData.refreshToken);
    console.log("stateHasBujeok " + getData.hasBujeok);
  }, []);

  return <></>;
  //이쪽에 스플래시를 넣어봅시다
};

// const action = { KakaoLogin };

// export { action };
export default KakaoLogin;

// 에러를 보내주면 token
// export const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// export const refreshAccessToken = async (refreshToken) => {
//   return await axios
//     .post(`${process.env.BACKEND_URL}/api/user/token/refresh/`, {
//       refresh: refreshToken,
//     })
//     .then((res) => {
//       sessionStorage.setItem("accessToken", res.data.access);
//       setAuthorization(res.data.access);
//       return res.data.access;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const checkAccessToken = async (refreshToken) => {
//   await refreshAccessToken(refreshToken);
// };
