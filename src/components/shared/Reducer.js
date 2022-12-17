// import { createSlice } from "@reduxjs/toolkit";

// // reducer란 해당 컴포넌트에서 사용할 초기 상태 값을 지정하고,
// // action이 전달하는 값들의 타입을 지정.
// // type 뿐만 아니라, payload가 전달하는 값들 또한 타입을 지정해줘야 한다.
// export const userSlice = createSlice({
//   // 로그인에서 아이디와 비밀번호을 입력받고,
//   // 아이디/비밀번호 찾기 컴포넌트에서 name,number를 입력받기에 사용할 리듀서의 이름을 userSlice라고 이름을 짓고 그걸 createSlice로 지정해준다.
//   // name? 리듀서 이름을 뭘로 할지 정하는 것.
//   name: "user",
//   // initialState? 이제 상태가 변하면 어떻게 실행될지 정하는 용도
//   initialState: {
//     id: "",
//     pw: "",
//     name: "",
//     number: "",
//   },
//   // reducer에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분.
//   // 로그인 버튼 클릭시 아이디, 비밀번호를 변하게 하고 싶으니 로그인 함수를 만들어 줌.
//   reducers: {
//     login: (state, action) => {
//       state.id = action.payload;
//       state.pw = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//     userSearch: (state, action) => {
//       state.name = action.payload;
//       state.number = action.payload;
//     },
//   },
// });
