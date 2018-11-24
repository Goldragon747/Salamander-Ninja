import React, { Component } from 'react';
import './app.css';
import Header from './header/header.jsx';
import Login from './auth/login.jsx';
import Register from './auth/register.jsx';
class Auth extends Component {
  constructor(){
    super();
    this.state = {
      register: false
    }
  }
  componentWillMount() {
    this.setState({
      register: this.props.location.search == "?register"
    })
  }
  render() {
    let body = this.state.register ? <Register /> : <Login />;
    return (
      <div id="main-container">
        <Header />
        {body}
      </div>
    );
  }
}

export default Auth;
