import React from "react";

export default function ImgReducer() {
  const TRUTH = "true/boolean";
  const FALSY = "false/boolean";

  const initialState = {
    boolean: true,
  };

  const handleScreenImg = (state = initialState, action) => {
    switch (action.type) {
      case "Boolean":
        return {
          ...state,
          boolean: action.type,
        };

      default:
        return state;
    }
  };
}
