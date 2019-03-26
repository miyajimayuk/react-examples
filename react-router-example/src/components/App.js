import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>

                    <Route path="/" exact component={Home} />
                    <Route path="/users/" exact component={Users} />
                </div>
            </Router>
        )
    }
}

export default App;