import React from 'react';

function NotFound() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">404</div>

                        <div className="card-body">Requested URL not found!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;