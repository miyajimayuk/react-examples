import {
    APP_LOAD
} from "../constants/actionTypes";

const defaultState = {
    appName: 'Real World Example App'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state
            };
        default:
            return state;
    }
};

