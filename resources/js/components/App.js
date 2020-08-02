import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Item from './Item';
import ItemContextProvider from '../contexts/ItemContext';

export default function App () {
    return (
        <div>
            <Navbar />
            <div className="container">
                <ItemContextProvider>
                    <Item />
                </ItemContextProvider>
            </div>
        </div>
       
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}