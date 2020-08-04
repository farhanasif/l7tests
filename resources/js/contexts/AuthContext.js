import React, { createContext, useReducer, useEffect, useState } from 'react';
//import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  //const [user, dispatch] = useReducer(authReducer, []);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') || 'false');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  console.log(isAuthenticated)

  const userLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', 'Jimmy');
    setIsAuthenticated('true');
    setUser('Jimmy')
  }


  const userLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.setItem('user', '');
    setIsAuthenticated('false');
    setUser('')
  }



  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, userLogin, userLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;