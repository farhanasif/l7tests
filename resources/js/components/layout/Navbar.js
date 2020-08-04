import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

export default function Navbar () {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-success">
            <div className="container">
                <a href="#" className="navbar-brand">React App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {isAuthenticated === 'true' ? (
                    <SignInLinks />
                ):(
                    <SignOutLinks />
                )}
            </div>
        </div>
    )
}