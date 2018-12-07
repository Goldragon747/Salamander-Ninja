import React, { Component } from 'react';
import './app.css';
import IndexBody from './index-body/index-body.jsx';

class Home extends Component {
  render() {
    return (
      <div id="main-container">
        <IndexBody />
      </div>
    );
  }
}

export default Home;