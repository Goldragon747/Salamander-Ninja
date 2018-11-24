import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render(){
        return (
            <div id="login" className="auth-container">
                <h2 className="auth-heading">Login</h2>
                <form className="auth-form">
                    <p className="auth-label">Email</p>
                    <input type="text" className="auth-field" />
                    <p className="auth-label">Password</p>
                    <input type="text" className="auth-field" />
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
                    <a className="auth-google" href="/google"></a>
                    <a className="auth-facebook" href="/facebook"></a>
                </div>
                <p className="auth-label auth-newuser">New to Salamander Ninja? <a className="auth-a" href="/login?register" >Register here.</a></p>
            </div>
        );
    }
}
export default Login;
