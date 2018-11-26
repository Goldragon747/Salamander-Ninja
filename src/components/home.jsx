import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import App from './app.jsx';
import Index from './index.jsx';
import Auth from './auth.jsx';

class Home extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/app' component={App} />
        <Route path='/login' component={Auth} />
      </Switch>
    );
  }
}

export default Home;