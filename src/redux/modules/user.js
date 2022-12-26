import { instance } from "../../components/shared/api"; // API 관리
import { createAction, handleActions } from "redux-actions";
// 불변성관리
import produce from "immer";
import { useNavigate } from "react-router-dom";

// actions
const SET_USER = "SET_USER"; // 로그인

//initialState
const initialState = {
  user: {
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    hasBujeok: true,
  },
};

// actionCreators
const setUser = createAction(
  SET_USER,
  (accessToken, refreshToken, hasBujeok) => ({
    accessToken,
    refreshToken,
    hasBujeok,
  })
);

// middleWares
// history를 navigate로 변경 가능.
const KakaoLoginToken = (code) => {
  const navigate = useNavigate();

  // history 말고 navigate
  return function (dispatch, getState) {
    instance
      .get(`/auth/kakao/login?code=${code}`)
      .then((res) => {
        // 내가 보기에 아래는 아닌 것 같고 밑밑에걸로 해야함.
        const token = res.headers.authorization.split("BEARER ");
        localStorage.setItem("token", token[1]); //근데 이게 header에 저장하는건가 ?잘 모르겠음 api.js 확인 해봐야 할 듯 !
        // 내가보기에는 아래와 같이 해야할 것 같음. data가 아래와 같이 넘어옴.

        const accessToken = res.response.accessToken;
        // 쿠키에도 저장을 해줘야 해?
        // setCookie("accessToken", accessToken);

        // localStorage.setItem("accessToken", res.response.accessToken);
        // localStorage.setItem("refreshToken", res.response.refreshToken);

        // 이거 해야할 것 같음!
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        const state = getState().user.is_login;

        // 토큰 받았고 로그인 됐음~!
        if (res.response.hasBujeok === false) {
          //   history.push("/create"); // history 대신 navigate 생각
          navigate("/create");
        } else {
          //   history.push("/confirm"); // history 대신 navigate 생각
          navigate("/confirm");
        }
        // 유저정보 저장.
        instance
          .get(`/auth/token`)
          .then((res) => {
            console.log(res, "나는 로그인체크응답");
            dispatch(
              setUser({
                // 다시 세팅하는 것임..
                accessToken: res.response.accessToken,
                refreshToken: res.response.refreshToken,
                hasBujeok: res.response.hasBujeok,
              })
            );
          })
          .catch((err) => console.log("유저정보저장오류", err));
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // 로그인에 실패하면 처음화면으로 돌려보냄.
        // history.replace("/"); // history 대신 navigate 생각
        navigate("/");
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.accessToken = action.payload.accessToken;
        draft.refreshToken = action.payload.refreshToken;
        draft.hasBujeok = action.payload.hasBujeok;
      }),
  },
  initialState
);

const actionCreators = {
  KakaoLoginToken,
};

export { actionCreators };
