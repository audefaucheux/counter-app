import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    count: 0,
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
    <div className="App">
      <p>Counter</p>
      <div className="counter">
        <button onClick={this.decrement}>-</button>
        <div className="count">{this.state.count}</div>
        <button onClick={this.increment}>+</button>
      </div>
    </div>
  );}
}

export default App;
