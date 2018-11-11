import React, { Component } from 'react';
import './icon-display.css';

class IconDisplay extends Component {
    render() {
        return (
            <div>
                <div className="row align padding-top">
                    <div className="icon-display">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="icon-display">
                        <i className="fas fa-thumbs-up"></i>
                    </div>
                    <div className="icon-display">
                        <i className="fas fa-magic"></i>
                    </div>
                </div>
                <div className="row align padding-bottom">
                    <div className="icon-text">Powerful</div>
                    <div className="icon-text">Easy to Learn</div>
                    <div className="icon-text">Customizable</div>
                </div>
            </div>
          
       );
    }
}
export default IconDisplay;