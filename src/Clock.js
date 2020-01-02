import React, { Component } from "react";
import { connect } from "react-redux";
import {
    REFRESH_TIME,
  } from './actions'


class Clock extends Component {

  updateTime = () => {
    this.props.dispatch({type: REFRESH_TIME})
  };

  render() {
    return (
      <div>
        <h2>Clock</h2>
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
