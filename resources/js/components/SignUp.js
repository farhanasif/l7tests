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
    timer: 6000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function SignUp() {
    const { isAuthenticated, setIsAuthenticated, user, setUser, userLogin } = useContext(AuthContext);
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = async(e) => {
        e.preventDefault();
        //edit the item
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        }).then((response) => response.json())
        .then((json) => {
            console.log(json)
            if(json.errors){
                let msg = "";
                if(json.errors.email) msg += " * "+json.errors.email
                if(json.errors.name) msg += " * "+json.errors.name
                if(json.errors.password) msg += " * "+json.errors.password

                Toast.fire({
                    icon: 'error',
                    title: msg
                })
            }
            else{
                userLogin(json)
                history.push("/")
                let msg = "Welcome " + json.name
                Toast.fire({
                    icon: 'success',
                    title: msg
                })
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
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

export default SignUp;