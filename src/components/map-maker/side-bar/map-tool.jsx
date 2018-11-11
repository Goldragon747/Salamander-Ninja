import React, { Component } from 'react';
import AttributesMap from './attributes/attributes-map.jsx';
class MapTool extends Component{
    render(){
        return (
            <div className="tool-container" style={this.props.styleProp}>
                 <h3>
                     Map Tool
                 </h3>
                 <div className="attribute-description">
                    <label>
                        Edit the map background, or save and export your map.
                    </label>
                </div>
                <div className="map-tool-body"></div>
                <AttributesMap />
            </div>
        );
    }
}
export default MapTool;

