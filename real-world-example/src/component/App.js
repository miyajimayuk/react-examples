import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import { connect } from "react-redux";
import {
  APP_LOAD
} from "../constants/actionTypes";

const mapStateToProps = state => ({
  appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
      dispatch({ type: APP_LOAD })
});

class App extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (App);
