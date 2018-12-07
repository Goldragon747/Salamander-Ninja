import React, { Component } from 'react';
import './single-feature.css';

class SingleFeature extends Component {
    render() {
        let components = [<div>
            <h3 className="sf-heading">{this.props.heading}</h3>
            <p className="sf-p">
                {this.props.text}
            </p>
        </div>, <img src={this.props.image} />];
        if(this.props.order == 2)
            components.reverse();
        return (
          <div className="row-2 align-2 padding-top padding-bottom">
            <div className="column-5">
                {components[0]}
            </div>
            <div className="column-5">
                {components[1]}
            </div>
          </div>  
       );
    }
}
export default SingleFeature;