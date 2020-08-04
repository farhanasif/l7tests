import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SignOutLinks() {
    return (
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
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