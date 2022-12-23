import { createSlice } from "@reduxjs/toolkit";
import { setAuthorization } from "../../stores/Token";

// reducer란 해당 컴포넌트에서 사용할 초기 상태 값을 지정하고,
// action이 전달하는 값들의 타입을 지정.
// type 뿐만 아니라, payload가 전달하는 값들 또한 타입을 지정해줘야 한다.
// name? 리듀서 이름을 뭘로 할지 정하는 것.
// initialState? 이제 상태가 변하면 어떻게 실행될지 정하는 용도
// reducer에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분.
const initialState = {
  value: {
    // isLogged: false,
    accessToken: null,
    hasBujeok: null,
  },
};

export const LoggedState = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAccount: (state, action) => {
      console.log("reducerAcccess " + state.accessToken);
      console.log("reducerBujeok " + state.hasBujeok);
      console.log("reducerActionAccess " + action.payload.accessToken);
      console.log("reducerActionHasBujeok " + action.payload.hasBujeok);
      // state.isLogged = true;
      state.accessToken = action.payload.accessToken;
      state.hasBujeok = action.payload.hasBujeok;
    },
    logoutAccount: (state) => {
      // state.isLogged = false;
      state.accessToken = null;
      state.hasBujeok = null;
    },
  },
});

// Action creators are generated for each case Account function
export const { loginAccount, logoutAccount } = LoggedState.actions;

// export const {
//   loginAccount,
//   logoutAccount,
// } = () => {
//   return (dispatch) => {
//     dispatch(loginReducer(setAuthorization));
//   };
// };

export default LoggedState.reducer;
