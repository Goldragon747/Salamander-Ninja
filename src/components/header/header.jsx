import React from 'react';
import './header.css';
import Logo from './logo/logo.jsx';

export default props => {
  let navLinks = [];
  if(props.LoggedIn == "true"){
    navLinks = [...navLinks, <span key="head-1"><a id="sn-logreg" className="main-navigation-item">
          <i className="fas fa-columns"></i> &nbsp;Dashboard
        </a>
        <a id="sn-user" className="main-navigation-item">
          <i className="fas fa-user-circle"></i> Michael
        </a></span>];
  } else {
    navLinks = [...navLinks, <a id="sn-logreg" className="main-navigation-item" key="head-2">
      Get Started
    </a>];
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