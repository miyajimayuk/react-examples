import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">{this.props.appName}</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Header