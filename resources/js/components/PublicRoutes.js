import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PublicRoute = ({ children, ...rest }) => {

    const { isAuthenticated } = useContext(AuthContext)
    console.log('public---',isAuthenticated)
    return (
        <Route
          {...rest}
          render={({ location }) =>
            isAuthenticated === 'true' ? (
                <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
              
            ) : (
                children
            )
          }
        />
      );

}

export default PublicRoute