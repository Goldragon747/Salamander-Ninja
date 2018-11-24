import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app.jsx';
import Index from './index.jsx';
import Auth from './auth.jsx';
class Home extends Component {
  render() {
    const Home = () => (
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/app' component={App}/>
          <Route path='/login' component={Auth}/>
        </Switch>
    )
    return (
      <Switch>
        <Home/>
      </Switch>
    );
  }
}

export default Home;