import React, { Component } from 'react';
import AttributesSelect from './attributes/attributes-select';
import AttributesLand from './attributes/attributes-land';
import AttributesText from './attributes/attributes-text';

class SelectTool extends Component{
    constructor(){
        super();
    }
    render(){
        
        return (
            <div className="tool-container" style={this.props.styleProp}>
                 <h3>
                     Select Tool
                 </h3>
                 <div id="no-select-container" className="attribute-description">
                    <label>
                        Click an item on your map to edit it.
                    </label>
                </div>
                <AttributesLand select={true}/>
                <AttributesText select={true}/>
                 <h3 className="opacity-disabled">
                     All Items
                 </h3>
                 <AttributesSelect />
            </div>
        );
    }
}

export default SelectTool;