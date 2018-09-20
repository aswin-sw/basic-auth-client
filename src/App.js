import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Login from './components/login';
import Question from './components/question';
import AppHeader from './components/appHeader';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Question} />
      </div>
    );
  }
}

export default App;
