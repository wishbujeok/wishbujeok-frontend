import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
// import { userActißons } from "../../redux/modules/user";
// import Spinner from "" -> 로딩 화면 추가해준 것이라 나중에 추가해도 됨.

const KakaoLogin = (props) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  let code = new URL(window.location.href).searchParams.get("code");

  // const fetchData = async () => {
  //   await dispatch(userActions.KakaoLoginToken(code));
  // };
  useEffect(() => {
    // await dispatch(userActions.KakaoLoginToken(code));
    // async function fetchData() {
    //   await dispatch(userActions.KakaoLoginToken(code));
    // }
    dispatch(userActions.KakaoLoginToken(code));
    // fetchData();
  }, []);

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
