import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function SignIn() {
    const { isAuthenticated, setIsAuthenticated, user, setUser, userLogin } = useContext(AuthContext);
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = async(e) => {
        e.preventDefault();
        //edit the item
        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => response.json())
        .then((json) => {
            console.log(json.message)
            if(json.message == 'E'){
                Toast.fire({
                    icon: 'error',
                    title: 'Email or password does not match'
                })
            }
            else{
                userLogin(json.message)
                history.push("/")
                Toast.fire({
                    icon: 'success',
                    title: 'Welcome User'
                })
            }
        })
        .catch((error) => {
            console.error(error);
        });
        // userLogin()
        // console.log(email, password)
        // history.push("/")
        
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
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
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