import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

export default function App () {
    return (
        <div>
            <Navbar />
            <div className="container">
                welcome
            </div>
        </div>
       
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}