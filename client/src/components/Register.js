import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../reducer";
import SocialLoginLinks from "./SocialLoginLinks";
import './auth/login.css';
import { NavLink, withRouter } from "react-router-dom";
class Register extends Component {
  state = {
    unMatchPwd: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.password.value !== this.password2.value) {
      this.setState({ unMatchPwd: "Doesn't match!" });
      return;
    } else {
      this.setState({ unMatchPwd: "" });
    }
    const payLoad = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    };
    this.props.dispatch(
      registerUser(payLoad, () => {
        this.clearForm();
        this.props.history.push("/profile");
      })
    );
  };

  clearForm = () => {
    this.name.value = "";
    this.email.value = "";
    this.password.value = "";
    this.password2.value = "";
  };

  render() {
    const { registerErrors } = this.props;
    const { unMatchPwd } = this.state;

    return (
      <div id="login" className="auth-container">
          <h2 className="auth-heading">Register</h2>
          <form className="auth-form" onSubmit={this.handleFormSubmit}>
              <p className="auth-label">*Name</p>
              <input type="text" className="auth-field" ref={node => {this.name = node;}} maxLength="50" autoFocus autoComplete="name" />
              <span style={{ display:"block", color: "red", marginLeft: 8 }}>
                {registerErrors.name}
              </span>
              <p className="auth-label">*Email</p>
              <input type="text" className="auth-field" autoComplete="email" ref={node => {this.email = node;}} required maxLength="50"/>
              <span style={{ display:"block", color: "red", marginLeft: 8 }}>
                {registerErrors.email}
              </span>
              <p className="auth-label">*Password</p>
              <input type="password" className="auth-field" autoComplete="new-password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
                title="Password must be at least 8 characters and include at least 1 uppercase character, 1 lowercase character, and 1 number."
                ref={node => {
                  this.password = node;
                }}
                required
                minLength="8"
                maxLength="50" />
                <span style={{ display:"block", color: "red", marginLeft: 8 }}>
                  {registerErrors.password}
                </span>
              <p className="auth-label">*Confirm Password</p>
              <input type="password" className="auth-field" autoComplete="new-password" type="password"
                ref={node => {
                  this.password2 = node;
                }}
                required
                maxLength="50" />
              <span style={{ display:"block", color: "red", marginLeft: 8 }}>{unMatchPwd}</span>
              <input type="submit" className="auth-submit" value="Create Account" />
          </form>
          <p className="auth-label auth-newuser">Already have an account? <NavLink className="auth-a" to="/login" >Login here.</NavLink></p>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return state;
};

Register = connect(mapStateToProps, null)(Register);

export default Register;
