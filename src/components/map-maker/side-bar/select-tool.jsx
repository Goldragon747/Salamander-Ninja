import React, { Component } from 'react';
import AttributesSelect from './attributes/attributes-select';
import AttributesLand from './attributes/attributes-land';

class SelectTool extends Component{
    constructor(){
        super();
        this.state={
            selectedTool: "land"
        }
    }
    render(){
        let ui;
        switch (this.state.selectedTool){
            case "none":
            ui = <div className="attribute-description">
                    <label>
                        Click an item on your map to edit it.
                    </label>
                </div>;
            break;
            case "land":
            ui = <AttributesLand select={true}/>;
            break;
        }
        return (
            <div className="tool-container" style={this.props.styleProp}>
                 <h3>
                     Select Tool
                 </h3>
                 {ui}
                 <h3 className="opacity-disabled">
                     All Items
                 </h3>
                 <AttributesSelect />
            </div>
        );
    }
}

export default SelectTool;