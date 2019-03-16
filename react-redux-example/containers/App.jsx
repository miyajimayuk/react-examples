import React, { Component } from 'react';
import PropType from 'prop-types';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux'
import CounterActions from '../actions/counter'

class App extends Component {

    static propTypes = {
        counter: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        const { counter, actions } = this.props;
        return (
            <div>
                <h2>count={counter.value}</h2>
                <button onClick={actions.increment}>+</button>
                <button onClick={actions.decrement}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, CounterActions), dispatch),
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(App);