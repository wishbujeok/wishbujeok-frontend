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

  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [hasBujeok, setHasBujeok] = useState(null);

  // const JWT_EXPIRE_TIME = 2 * 3600 * 1000;

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
      // .then((res) => res.json())
      .then((res) => {
        setAccessToken(res.response.accessToken);
        setRefreshToken(res.response.refreshToken);
        setHasBujeok(res.response.hasBujeok);
        sessionStorage.setItem(setAccessToken, res.response.accessToken);
        sessionStorage.setItem(setRefreshToken, res.response.refreshToken);
        sessionStorage.setItem(setHasBujeok, res.response.hasBujeok);

        /*
        sessionStorage.setItem("accessToken", res.response.accessToken);
        sessionStorage.setItem("refreshToken", res.response.refreshToken);
       */
        console.log("kakaologin AccessToken " + res.response.accessToken);
        console.log("useStateAccess " + accessToken);
        console.log("useStateRefresh " + refreshToken);
        console.log("useStateHasBujeok " + hasBujeok);
        console.log("kakaoLogin RefreshToken " + res.response.refreshToken);
        console.log("kakaoLogin HasBujeok " + res.response.hasBujeok);

        setUseAccessToken(res.response.accessToken);
        setAuthorization(res.response.accessToken);
        if (res.response.hasBujeok === false) {
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
