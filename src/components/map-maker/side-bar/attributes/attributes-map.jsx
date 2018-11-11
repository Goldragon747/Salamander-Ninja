import React, { Component } from 'react';
class AttributesMap extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        return (
            <div>
                 <div className="attribute-items">
                     <div className="attribute-row">
                         <div className="attribute-save disabled-button">Save</div>
                     </div>
                 </div>
                 <div className="attribute-items">
                     <div className="attribute-row-2">
                         <div id="download-png" className="attribute-download">Download PNG</div>
                         <div id="download-svg" className="attribute-download">Download SVG</div>
                     </div>
                 </div>
            </div>
        );
    }
}
export default AttributesMap;
