import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext'


function SignInLinks() {
    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuthenticated(false)
        setUser('')
        history.push("/signin")
    }

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
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" data-toggle="dropdown" href="#" id="themes">{user} <span class="caret"></span></a>
                <div class="dropdown-menu" aria-labelledby="themes">
                    <Link to="#" className="dropdown-item" onClick={handleSubmit}>Logout</Link>
                </div>
                </li>
            </ul>
        </div>
    );
}

export default SignInLinks;