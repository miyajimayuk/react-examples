import React, { Component } from 'react';
import {connect} from "react-redux";

class App extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
        value: state.count
});

const mapDispatchToProps = dispatch => ({
        onIncreaseClick: () =>
            dispatch({ type: 'increase' })
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
