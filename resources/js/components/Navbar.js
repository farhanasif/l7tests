import React from 'react';
import ReactDOM from 'react-dom';

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
                            <a className="nav-link" href="../help/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://blog.bootswatch.com">Items</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="download">Drop menu <span className="caret"></span></a>
                        <div className="dropdown-menu" aria-labelledby="download">
                            <a className="dropdown-item" target="_blank" href="https://jsfiddle.net/bootswatch/9y480qo5/">Open in JSFiddle</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="../4/cerulean/bootstrap.min.css" download>bootstrap.min.css</a>
                            <a className="dropdown-item" href="../4/cerulean/bootstrap.css" download>bootstrap.css</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="../4/cerulean/_variables.scss" download>_variables.scss</a>
                            <a className="dropdown-item" href="../4/cerulean/_bootswatch.scss" download>_bootswatch.scss</a>
                        </div>
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