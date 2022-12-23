const initialState = {
  boolean: false,
};

const imageReducer = (state = initialState, action) => {
  if (action.type === "result") {
    let some = state;
    return !some;
  } else {
    return state;
  }
};

export default imageReducer;
