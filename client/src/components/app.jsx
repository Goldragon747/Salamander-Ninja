import React, { Component } from 'react';
import { connect } from "react-redux";
import './app.css';
import Header from './header/header.jsx';
import MapMaker from './map-maker/map-maker.jsx';
import Login from "./Login";

class App extends Component {
  constructor(props){
    super(props);
  }
  loadScript = function(src,type,canvas,ignorepaper,onload) {
        var tag = document.createElement('script');
        tag.async = false;
        
        tag.src = src; 
        if(type){
            tag.type = type;
        }
        if(canvas){
            tag.setAttribute("canvas",canvas);
        }
        tag.dataset.paperIgnore = "false";
        if(onload){
          tag.onload = function(){window.run();};
        }
        document.getElementsByTagName("body")[0].appendChild(tag);
      }
  componentDidMount(event){
    this.loadScript("/scripts/paperscript.js","text/paperscript","map-canvas",true);
  }

  render() {
    return (
      <div id="main-container" className="container">
        <MapMaker map={this.props.location.search} />
        
        {/* <script id="paperscript" src="/scripts/paperscript.js" type="text/paperscript" canvas="map-canvas" data-paper-ignore="false"></script> */}
      </div>
    );
  }
}
export default App;
