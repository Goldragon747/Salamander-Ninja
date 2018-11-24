import React, { Component } from 'react';
import './app.css';
import Header from './header/header.jsx';
import IndexBody from './index-body/index-body.jsx';
class Index extends Component {
  state = {users: [],userLoggedIn: ""}


  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch("/users/isloggedin")
      .then(res => res.json())
      .then(userLoggedIn => this.setState({ userLoggedIn }));
      const script = document.createElement("script");

      script.src = "/scripts/splashscreen.js";
      script.async = true;

      document.body.appendChild(script);
  }
  render() {
    return (
      <div id="main-container">
        <Header LoggedIn={this.state.userLoggedIn.response} />
        <IndexBody />
        {/* <script src="/scripts/splashscreen.js"></script> */}
      </div>
    );
  }
}

export default Index;