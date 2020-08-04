import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SignOutLinks() {
    return (
        <div>
            <ul className="navbar-nav">
            </ul>
            <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                    <Link to="/signin" className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link active">Register</Link>
                </li>
            </ul>
        </div>
    );
}

export default SignOutLinks;