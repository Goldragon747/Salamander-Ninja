import React, { Component } from 'react';
import AttributesText from './attributes/attributes-text.jsx';
import AttributesPreset from './attributes/attributes-preset.jsx';
class TextTool extends Component{
    render(){
        return (
            <div className="tool-container" style={this.props.styleProp}>
                 <h3>
                     Text Tool
                 </h3>
                 <div className="attribute-description">
                    <label>
                        Click on the map and start typing to add text.
                    </label>
                </div>
                <AttributesText />
            </div>
        );
    }
}
export default TextTool;

