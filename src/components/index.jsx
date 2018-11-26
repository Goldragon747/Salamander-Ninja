import React, { Component } from 'react';
import './app.css';
import Header from './header/header.jsx';
import IndexBody from './index-body/index-body.jsx';
import queryString from "query-string";

class Index extends Component {
  state = {users: [],userLoggedIn: ""}

  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
      console.log("token",query.token)
      fetch("/auth/google/parse?token="+ query.token)
        .then(res => res.json())
        .then(users => console.log("response",users));
    }
  }
  componentDidMount() {
    // fetch("/users")
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    // fetch("/users/isloggedin")
    //   .then(res => res.json())
    //   .then(userLoggedIn => this.setState({ userLoggedIn }));
    //   const script = document.createElement("script");

    //   script.src = "/scripts/splashscreen.js";
    //   script.async = true;

    //   document.body.appendChild(script);
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