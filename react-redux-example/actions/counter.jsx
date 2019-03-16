import {
    INCREMENT,
    DECREMENT
} from '../constants/ActionTypes';

function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

const CounterAction = {
    increment,
    decrement,
};

export default CounterAction;