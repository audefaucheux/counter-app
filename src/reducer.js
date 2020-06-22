import { getTime } from "./Helpers";

export const initialState = {
  count: 0,
  time: getTime(),
};

// decides what to update depending on the action type
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "REFRESH_TIME": {
      return {
        ...state,
        time: getTime(),
      };
    }
    default:
      return state;
  }
};
