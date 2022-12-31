import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setAuthorization } from "../../stores/Token";
import axios from "axios";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

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
        sessionStorage.setItem("accessToken", res.data.response.accessToken);
        sessionStorage.setItem("refreshToken", res.data.response.refreshToken);

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

  return <></>;
};

export default KakaoLogin;
