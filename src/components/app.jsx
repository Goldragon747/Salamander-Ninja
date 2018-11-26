import React, { Component } from 'react';
import './app.css';
import Header from './header/header.jsx';
import MapMaker from './map-maker/map-maker.jsx';
import queryString from "query-string";

class App extends Component {
  componentWillMount() {
      var query = queryString.parse(this.props.location.search);
      if (query.token) {
        window.localStorage.setItem("jwt", query.token);
        this.props.history.push("/");
    }
  }
  render() {
      // const script = document.createElement("script");
      //   script.setAttribute("src","/scripts/button-clicks.js");
      //   document.head.appendChild(script);
    return (
      <div id="main-container" className="container">
        <Header />
        <MapMaker />
      </div>
    );
  }
}

export default App;
