import React from 'react';

function SignUp() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Register Account</div>

                        <div className="card-body">
                        <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;