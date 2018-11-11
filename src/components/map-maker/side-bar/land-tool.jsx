import React, { Component } from 'react';
import AttributesLand from './attributes/attributes-land.jsx';
import AttributesPreset from './attributes/attributes-preset.jsx';
class LandTool extends Component{
    render(){
        return (
            <div className="tool-container" style={this.props.styleProp}>
                 <h3>
                     Land Tool
                 </h3>
                 <div className="attribute-description">
                    <label>
                        Click and Drag on the map-screen to begin drawing your map.
                    </label>
                </div>
                <AttributesLand />
                <h3 className="opacity-disabled">
                    Presets
                </h3>
                <div className="attribute-description">
                    <label className="opacity-disabled">
                        Drag and drop the presets right onto your map!
                    </label>
                </div>
                <AttributesPreset />
            </div>
        );
    }
}
export default LandTool;

