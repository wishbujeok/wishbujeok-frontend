
import { useLocation, useNavigate } from "react-router-dom";
// import { checkAccessToken } from "../../stores/Token";
import { useEffect, useState } from "react";
import { setAuthorization, setUseAccessToken } from "../../stores/Token";
import { useDispatch } from "react-redux";
import { loginAccount } from "../reducer/Reducer";
// import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";

const KakaoLogin = (props) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  let code = new URL(window.location.href).searchParams.get("code");

  // const [useAccessToken, setUseAccessToken] = useState();
  // console.log("밖useAccessToken " + useAccessToken.getUseAccessToken);
  // console.log(`밖useAccessToken  ${useAccessToken.getUseAccessToken}`);
  // console.log("밖setUseAccessToken " + setUseAccessToken.getUseAccessToken);
  // console.log("밖useAccessToken " + setUseAccessToken);
  // console.log(`밖useAccessToken  ${useAccessToken}`);
  console.log(`setUseAccessToken$$  + ${setUseAccessToken}`);
  console.log(
    `setAuthorization$$  + ${setAuthorization} or ${setAuthorization.token}`
  );


  /*
  1;
  useEffect(() => {
    dispatch(userActions.KakaoLoginToken(code));
  });

  2;
  const fetchData = async () => {
    await dispatch(userActions.KakaoLoginToken(code));
  };
  useEffect(() => {
    fetchData();
  });

  3;
  useEffect(async () => {
    await dispatch(userActions.KakaoLoginToken(code));
  });
  */

  // 로딩화면 추가해준 것임.. 나중에 추가하자. 일단 통신부터 하고
  // return <Spinner />;
};

export default KakaoLogin;
