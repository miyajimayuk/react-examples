import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// new inport
import { connect } from 'react-redux';
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction';

import rotateAction from './actions/rotateAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            className={
              "App-logo" + 
              (this.props.rotating ? "":" App-logo-paused")
            } 
            alt="logo"
            onClick={
              () => this.props.rotateAction(!this.props.rotating)
            }
           />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// ストアの状態を取得
const mapStateToProps = state => ({
  ...state
});

// アクションを取得してストアにディスパッチ
const mapDispatchToProps = dispatch => ({
  //startAction: () => dispatch(startAction),
  //stopAction: () => dispatch(stopAction)
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
