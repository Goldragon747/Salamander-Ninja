import React, { Component } from 'react';
import './login.css';

class Register extends Component {
    render(){
        return (
            <div id="login" className="auth-container">
                <h2 className="auth-heading">Register</h2>
                <form className="auth-form">
                    <p className="auth-label">*Name</p>
                    <input type="text" className="auth-field" />
                    <p className="auth-label">*Email</p>
                    <input type="text" className="auth-field" />
                    <p className="auth-label">*Password</p>
                    <input type="text" className="auth-field" />
                    <p className="auth-label">*Confirm Password</p>
                    <input type="text" className="auth-field" />
                    <input type="submit" className="auth-submit" value="Create Account" />
                </form>
                <p className="auth-label auth-newuser">Already have an account? <a className="auth-a" href="/login" >Login here.</a></p>
            </div>
        );
    }
}
export default Register;
