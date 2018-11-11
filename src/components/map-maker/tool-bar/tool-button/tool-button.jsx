import React from 'react';
import './tool-button.css';

export default props => {
   var classString = props.isHovered != null ? "tool-button tool-hover" : "tool-button";
   classString += props.isDisabled ? " disabled-button" : "";
   return (
      <div id={props.toolName} className={classString} onClick={props.click}>
        <i className={props.icon}></i>
      </div>   
   );
};