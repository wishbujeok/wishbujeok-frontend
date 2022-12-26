import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// logger는 굳이 안써도 되긴 함.
// import { createLogger } from "redux-logger";

// react-router가 v6로 업그레이드하며 쓰지 않아도 되는 것들..
// import { history } from "history";
// import { connectRouter } from "connected-react-router";
// 아래와 같이 발전 이것도 모르고 쓰고 있었다니 ,,

// 여기 수정해야함..

import User from "./modules/user";

// rootReducer : 여러개의 모듈을 하나로 묶어서 사용
const rootReducer = combineReducers({
  user: User,
});

// 스토어에 rootReducer와 reduxdev를 적용된 enhancer 적용
export function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return { store };
}

// const store = (initialStore) => {
//   //   createStore(rootReducer, applyMiddleware(logger, thunk));
//   createStore(rootReducer, applyMiddleware(thunk));
// };

export default configureStore();

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // import 상태파일명 from "상태파일경로";
// import Reducer from "../reducer/Reducer";

// // import ImgReducer from "../reducer/ImgReducer";

// // configureStore가 reducer를 감싸고 있고 여기서 모든 state를 관리.
// // reducer에 상태관리할 것들을 저장할 것들을 넣으면 됨.
// const rootReducer = combineReducers({
//   user: Reducer,
//   // ImgReducer,
// });
// console.log("store파일 " + rootReducer.user);

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
