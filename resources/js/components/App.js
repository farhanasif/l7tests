import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Item from './Item';

export default function App () {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Item />
            </div>
        </div>
       
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}