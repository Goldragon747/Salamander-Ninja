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
  }
  
  render() {
    return (
      <div id="main-container">
        {/* {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}
        <Header LoggedIn={this.state.userLoggedIn.response} />
        <IndexBody />
      </div>
    );
  }
}

export default Index;