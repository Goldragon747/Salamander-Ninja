import React, { Component } from 'react';
import './feature-list.css';

class FeatureList extends Component {
    

    render() {
        let features = [];
        for(let i = 0; i < this.props.features.length; i++ ){
            features = [...features,<li>
                {this.props.features[i]}
            </li>]
        }
        return (
            <div>
                <h3 className="fl-heading padding-top padding-bottom-2">Features</h3>
                <div className="row align padding-bottom">
                    <ul className="features">
                        {features}
                    </ul>
                </div>
            </div>  
       );
    }
}
export default FeatureList;