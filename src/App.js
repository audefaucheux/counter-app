import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Counter from "./Counter";
import Clock from "./Clock";
import { reducer, initialState } from "./reducer";
import "./App.css";

const store = createStore(reducer, initialState, composeWithDevTools());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>A Useless App</h1>
          <Counter />
          <br />
          <Clock />
        </div>
      </Provider>
    );
  }
}

export default App;
