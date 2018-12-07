import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reAuthUser } from "../reducer";
import NavBar from "./NavBar";
import App from "./app"
import Header from "./header/header.jsx"
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import SocialAuthRedirect from "./SocialAuthRedirect";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

class AppContainer extends Component {
  componentWillMount() {
    this.props.dispatch(reAuthUser());
  }

  render() {
    return (
      <Router>
        <div style={{width:'100%',height:'100%',flex:1,display:"flex",flexDirection:"column"}}>
          <Header />
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/app" component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/socialauthredirect/" component={SocialAuthRedirect} />
          <PrivateRoute path="/profile/:uid?" component={Profile} />
        </div>
      </Router>
    );
  }
}

AppContainer = connect()(AppContainer);

export default AppContainer;
