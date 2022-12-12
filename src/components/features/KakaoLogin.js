import { useLocation, useNavigate } from "react-router-dom";
import { checkAccessToken } from "../../stores/Token";
import { useEffect } from "react";
import { setAuthorization } from "../../stores/Token";

const JWT_EXPIRE_TIME = 2 * 3600 * 1000; // expiration time(2 hours in milliseconds)

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  // console.log(KAKAO_CODE);

  useEffect(() => {
    // console.log(KAKAO_CODE);
    // ${KAKAO_CODE} 가 인가코드래
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
        // accessToken 확인됨. 아래와 같이 백엔드에서 넘어옴.
        //   {
        //     "success": true,
        //     "response": {
        //         "tokenType": "Bearer",
        //         "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRvb2x5c21pbGUxQG5hdmVyLmNvbSIsInN1YiI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTY3MDg1OTMwMSwiZXhwIjoxNjcwODk1MzAxfQ.VpmBME8IeUXvOOuXPfQ9ZMasxVirmDsFaqV9-oguESY",
        //         "refreshToken": null
        //     },
        //     "error": null
        // }
        console.log(res.response.accessToken);
        sessionStorage.setItem("refreshToken", res.response.refreshToken);
        // sessionStorage.setItem("user_id", res.response.user.pk);
        setAuthorization(res.response.accessToken);
        setTimeout(
          checkAccessToken,
          JWT_EXPIRE_TIME - 60000,
          res.refresh_token
        ); // 1 minute before expiration
        navigate("/create");
      });
  }, []);
  return <></>;
  //이쪽에 스플래시를 넣어봅시다
};

export default KakaoLogin;
