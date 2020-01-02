import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

class Counter extends React.Component {
  // using dispatch to trigger a change
  decrement = () => {
    this.props.decrement();
  };

  // using dispatch to trigger a change
  increment = () => {
    this.props.increment();
  };

  render() {
    return (
      <>
        <h2>Counter</h2>
        <div className="counter">
          <button onClick={this.decrement}>-</button>
          <div className="count">{this.props.count}</div>
          <button onClick={this.increment}>+</button>
        </div>
      </>
    );
  }
}

// get state and pass it down as component props
const mapStateToProps = state => ({
  count: state.count
});

// actions creators passed down as props
const mapDispatchToProps = {
  increment,
  decrement
};

// connect component to redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
