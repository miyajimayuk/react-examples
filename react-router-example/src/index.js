import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

function Index() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about/">About</Link>
				</li>
				<li>
					<Link to="/users/">Users</Link>
				</li>
			</ul>

			<Route path="/" exact component={Index} />
			<Route path="/about/" exact component={About} />
			<Route path="/users/" exact component={Users} />
		</div>
	</Router>,
	 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
