import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  // using dispatch to trigger a change
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  // using dispatch to trigger a change
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  render() {
    return (
      <>
        <h1>Counter</h1>
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

// connect component to redux
export default connect(mapStateToProps)(Counter);
