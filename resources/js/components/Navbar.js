import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-success">
            <div className="container">
                <a href="../" className="navbar-brand">React App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/items" className="nav-link active">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link active">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link active">Signup</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}