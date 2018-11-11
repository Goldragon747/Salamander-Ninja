import React, { Component } from 'react';
import './tool-bar.css';
import ToolButton from './tool-button/tool-button.jsx';

export default props => {
    return (
      <div id="tool-bar">
        <ToolButton click={props.changeToolSelect} toolName="tool-select" icon="fas fa-location-arrow" isHovered={true} />
        <ToolButton click={props.changeToolLand} toolName="tool-land" icon="fas fa-globe-americas" />
        <ToolButton click={props.changeToolText} toolName="tool-text" icon="fas fa-map-signs" />
        <ToolButton click={props.changeToolForest} toolName="tool-forest" icon="fas fa-tree" isDisabled={true} />
        <ToolButton click={props.changeToolMountain} toolName="tool-mountain" icon="fas fa-mountain" isDisabled={true} />
        <ToolButton click={props.changeToolRiver} toolName="tool-river" icon="fab fa-stripe-s" isDisabled={true} />
        <ToolButton click={props.changeToolRoad} toolName="tool-road" icon="fas fa-road" isDisabled={true} />
        <ToolButton click={props.changeToolLandmark} toolName="tool-landmark" icon="fab fa-fort-awesome" isDisabled={true} />
        <ToolButton click={props.changeToolMap} toolName="tool-map" icon="fas fa-map" />
      </div>  
    );
}