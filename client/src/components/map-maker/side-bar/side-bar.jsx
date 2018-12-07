import React, { Component } from 'react';
import './side-bar.css';
import './attributes/attributes.css'
import LandTool from './land-tool.jsx';
import SelectTool from './select-tool';
import TextTool from './text-tool';
import MapTool from './map-tool';

class SideBar extends Component{
  constructor(props){
      super(props);
  }
  // componentWillMount () {
    
  // }
  render(){
    let selectUIDiplay = this.props.tool == "select" ? {display:"flex"}: {display:"none"};
    let landToolUIDiplay = this.props.tool == "land" ? {display:"flex"}: {display:"none"};
    let textToolUIDiplay = this.props.tool == "text" ? {display:"flex"}: {display:"none"};

    let mapToolUIDiplay = this.props.tool == "map" ? {display:"flex"}: {display:"none"};
    // const script = document.createElement("script");
    // script.setAttribute("src","/scripts/spectrum-config.js");
    // document.head.appendChild(script);
    return (
    <div id="side-bar">
        <SelectTool styleProp={selectUIDiplay} />
        <LandTool styleProp={landToolUIDiplay} />
        <TextTool styleProp={textToolUIDiplay} />
        <MapTool map={this.props.map} styleProp={mapToolUIDiplay} />
    </div>
    );
  };
}
export default SideBar;