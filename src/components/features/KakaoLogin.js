import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setAuthorization } from "../../stores/Token";
import axios from "axios";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const [getData, setGetData] = useState([]);

  useEffect(() => {
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

        sessionStorage.setItem("accessToken", res.data.response.accessToken);
        sessionStorage.setItem("refreshToken", res.data.response.refreshToken);

        console.log("kakaologin AccessToken " + res.data.response.accessToken);
        console.log(
          "kakaoLogin RefreshToken " + res.data.response.refreshToken
        );
        console.log("kakaoLogin HasBujeok " + res.data.response.hasBujeok);

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
  }, []);
  // 안됨..
  console.log("stateAccess " + getData.accessToken);
  console.log("stateRefresh " + getData.refreshToken);
  console.log("stateHasBujeok " + getData.hasBujeok);

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
