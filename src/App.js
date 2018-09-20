import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import fetch from './utils/api';

// components
import Login from './components/login';
import Question from './components/question';
import PublicRoute from './containers/PublicRoute';
import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> App header</h1>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Question} />
      </div>
    );
  }
}

export default App;
