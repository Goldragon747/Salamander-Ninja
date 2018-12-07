import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reAuthUser } from "../reducer";
import App from './app.jsx';
import Index from './index.jsx';
import Auth from './auth.jsx';

class AppContainer extends Component {
  componentWillMount() {
    this.props.dispatch(reAuthUser());
  }

  render() {
    return (
      <Router>
          <Route exact path='/' component={Index} />
          <Route path='/app' component={App} />
          <Route path='/login' component={Auth} />
          {/* <PrivateRoute path="/profile/:uid?" component={Profile} /> */}
      </Router>
    );
  }
}

AppContainer = connect()(AppContainer);

export default AppContainer;
