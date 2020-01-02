import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Counter'
import './App.css';

const initialState = {
  count: 0
}

// decides what to update depending on the action type
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default: 
      return state
  }
}

// store the states
const store = createStore(reducer);

class App extends React.Component {

  render() {
    return (
   <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
   </Provider>
  );}
}

export default App;
