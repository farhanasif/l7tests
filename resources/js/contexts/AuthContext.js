import React, { createContext, useReducer, useEffect, useState } from 'react';
//import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  //const [user, dispatch] = useReducer(authReducer, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;