import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshTime } from "./actions";

class Clock extends Component {
  updateTime = () => {
    this.props.refreshTime();
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
});

const mapDispatchToProps = {
  refreshTime
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
