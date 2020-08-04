import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './layout/Navbar';
import Dashboard from './Dashboard';
import SignIn from './SingIn';
import SignUp from './SignUp';
import Item from './Item';
import ItemContextProvider from '../contexts/ItemContext';
import AuthContextProvider from '../contexts/AuthContext';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PrivateRoute from './PrivateRoute'

export default function App () {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} /> 
                            <PrivateRoute path="/items">
                                <ItemContextProvider>
                                    <Item />
                                </ItemContextProvider>
                            </PrivateRoute>
                            <PrivateRoute path="/" > 
                                <Dashboard />
                            </PrivateRoute>
                        </Switch>
                    </div>
                    
                </div>
            </AuthContextProvider>
        </BrowserRouter>
       
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}