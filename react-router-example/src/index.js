import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

function reducer(state = 'State', action) {
	switch (action.type) {
		case 'change':
			return action.payload.newState;
		default:
			return state;
	}
}

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({
	type: 'change',
	payload: {newState: 'New'}
})

console.log(store.getState());

ReactDOM.render(
	<App />,
	 document.getElementById('root')
);

