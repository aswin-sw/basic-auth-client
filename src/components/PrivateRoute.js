import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => !!localStorage['authToken'];

// if not authorized, redirect to login
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
