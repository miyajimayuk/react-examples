import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import createHistory from 'history/createBrowserHistory';

export const store = createStore(
	reducer
);