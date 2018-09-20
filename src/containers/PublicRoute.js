import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => !!localStorage['authToken'];

// if user is authenticated redirect away !
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default PublicRoute;
