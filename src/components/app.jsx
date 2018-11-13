import React, { Component } from 'react';
import './app.css';
import Header from './header/header.jsx';
import MapMaker from './map-maker/map-maker.jsx';
class App extends Component {

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
