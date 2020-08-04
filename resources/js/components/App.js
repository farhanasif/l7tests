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
    Route
} from "react-router-dom";


export default function App () {
    return (
        <BrowserRouter>
            <AuthContextProvider>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <ItemContextProvider>
                            <Route path="/items" component={Item}/>
                        </ItemContextProvider>
                        
                    </Switch>
                </div>
                
            </div>
            </AuthContextProvider>
        </BrowserRouter>
        // <div>
        //     <Navbar />
        //     <div className="container">
        //         <ItemContextProvider>
        //             <Item />
        //         </ItemContextProvider>
        //     </div>
        // </div>
       
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}