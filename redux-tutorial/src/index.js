import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// １．CreateStoreのインポート
import { createStore } from 'redux';

// ２．reducer処理実装 <- 引数にStateとActionを渡す
function reducer(state, action) {
	if (action.type === 'changeState') {
		return action.payload.newState;
	}
	return 'State';
}

// ３．store定義 <- Storeの引数としてReducerを渡す
const store = createStore(reducer);

// store定義時のStateを表示
console.log(store.getState());

// ４．Action定義
const action = {
	type: 'changeState',
	payload: {
		newState: 'New State'
	}
};

// ５．dispatchでAction実行
store.dispatch(action);

// Action実行後のStateを表示
console.log(store.getState());

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
