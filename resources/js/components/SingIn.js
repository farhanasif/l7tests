import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

function SignIn() {
    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuthenticated(true)
        setUser('Tommy')
        history.push("/")
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;