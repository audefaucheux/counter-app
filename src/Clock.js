import React, { Component } from "react";
import { connect } from "react-redux";

class Clock extends Component {

  updateTime = () => {
    this.props.dispatch({type: "REFRESH_TIME"})
  };

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <p>{this.props.time}</p>
        <button onClick={this.updateTime}>Refresh</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    time: state.time
})

export default connect(mapStateToProps)(Clock);
