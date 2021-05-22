import { initialState } from "./state";

const reducer = (state :any= initialState, action: any) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};

export default reducer;
