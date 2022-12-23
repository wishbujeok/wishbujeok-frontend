import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import 상태파일명 from "상태파일경로";
import Reducer from "../reducer/Reducer";

import ImgReducer from "../reducer/ImgReducer";

// configureStore가 reducer를 감싸고 있고 여기서 모든 state를 관리.
// reducer에 상태관리할 것들을 저장할 것들을 넣으면 됨.
const rootReducer = combineReducers({
  user: Reducer,
  ImgReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
