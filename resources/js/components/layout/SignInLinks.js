import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SignInLinks() {
    return (
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/items" className="nav-link active">Items</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                    <Link to="/signin" className="nav-link active">Logout</Link>
                </li>
            </ul>
        </div>
    );
}

export default SignInLinks;