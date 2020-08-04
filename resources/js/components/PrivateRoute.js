import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Route
          {...rest}
          render={({ location }) =>
            isAuthenticated === 'true' ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );

}

export default PrivateRoute