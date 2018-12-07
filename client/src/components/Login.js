import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../reducer";

import { NavLink } from "react-router-dom";
import './auth/login.css';
class Login extends Component {
  handleFormSubmit = async e => {
    e.preventDefault();
    const payload = {
      email: this.email.value,
      password: this.password.value
    };
    this.props.dispatch(
      loginUser(payload, () => {
        this.clearForm();
        console.log("user",this.props)
        const { from } = this.props.location.state || {
          from: { pathname: "/profile/" + this.props.userInfo._id }
        };
        this.props.history.push(from.pathname);
      })
    );
  };

  clearForm = () => {
    this.email.value = "";
    this.password.value = "";
  };

  render() {
    const { loginErrors } = this.props;

    return (
      <div id="login" className="auth-container">
          <h2 className="auth-heading">Login</h2>
          <form className="auth-form" onSubmit={this.handleFormSubmit}>
              <p className="auth-label">Email</p>
              <input type="text" className="auth-field" autoComplete="email" ref={node => {this.email = node;}} required maxLength="50" autoFocus />
              <span style={{ display:"block", color: "red", marginLeft: 8 }}>
                {loginErrors.email}
              </span>
              <p className="auth-label">Password</p>
              <input type="password" className="auth-field" autoComplete="current-password" ref={node => {this.password = node;}} required maxLength="50" />
              <span style={{ display:"block", color: "red", marginLeft: 8 }}>
                {loginErrors.password}
              </span>
              <div className="auth-row">
                  <div className="auth-col">
                      <p className="auth-label auth-separator">
                          <label>Remember me</label><input type="checkbox" className="auth-field-check" />
                      </p>
                  </div>
                  <div className="auth-col">
                      <p className="auth-label auth-right">
                          <a href="/forgotpass" className="auth-a">Forgot password?</a>
                      </p>
                  </div>
              </div>
              <input type="submit" className="auth-submit" value="Login" />
          </form>
          <h2 className="auth-heading auth-divider">
              or
          </h2>
          <div className="auth-row">
              <a className="auth-google"  href={`http://localhost:5150/auth/google?linkinguri=${window.location.origin}/socialauthredirect`}></a>
              <a className="auth-facebook" href={`http://localhost:5150/auth/facebook?linkinguri=${window.location.origin}/socialauthredirect`}></a>
          </div>
          <p className="auth-label auth-newuser">New to Salamander Ninja? <NavLink className="auth-a" to="/register" >Register here.</NavLink></p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

Login = connect(mapStateToProps, null)(Login);

export default Login;
