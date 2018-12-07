import React from 'react';
import './header.css';
import Logo from './logo/logo.jsx';
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logoutUser } from "../../reducer";

let NavBar = ({ isAuthed, dispatch, history, userInfo }) => {
  let navLinks = [];
  if(isAuthed){
    navLinks = [...navLinks, <span key="head-1"><a id="sn-logreg" className="main-navigation-item" onClick={() => dispatch(logoutUser(() => history.push("/")))}> 
          Logout
        </a>
        <NavLink
          id="sn-user" className="main-navigation-item"
          to={`/profile/${userInfo._id}`}
        >
          <i className="fas fa-user-circle"></i> {userInfo.name}
        </NavLink>
       </span>];
  } else {
    navLinks = [...navLinks, <NavLink id="sn-logreg" to={'/login'} className="main-navigation-item" key="head-2">
      Get Started
    </NavLink>];
  }
  return (
      <header className="main-header">
        <a href="/" className="main-header-a">
            <Logo />
            <div className="main-title">
              <h1>Salamander<span>.</span>Ninja</h1>
              <h2>The Agile World Fabricator</h2>
            </div>
        </a>
        {navLinks}
      </header>
  );
};

const mapStateToProps = state => {
  return state;
};

NavBar = connect(mapStateToProps, null)(NavBar);

export default withRouter(NavBar);