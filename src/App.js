import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./Counter";
import Clock from "./Clock";
import "./App.css";

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

const initialState = {
  count: 0,
  time: getTime(),
};

// decides what to update depending on the action type
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "REFRESH_TIME": {
      return {
        ...state,
        time: getTime()
      };
    }
    default:
      return state;
  }
};

// store the states
const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <br />
          <Clock />
        </div>
      </Provider>
    );
  }
}

export default App;
