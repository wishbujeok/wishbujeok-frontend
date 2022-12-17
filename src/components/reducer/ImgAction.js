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
