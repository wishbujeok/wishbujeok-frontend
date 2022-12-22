import React from "react";

import { TRUTH, FALSY } from "./ImgType";

export const BooleanData = (boolean) => {
  return {
    type: "result",
    payload: {
      boolean: !boolean,
    },
  };
};

// 복주머니 데이터가 있으면 true 로 바꿔줄것.
