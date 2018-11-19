import React, { Component } from 'react';
import './tool-bar.css';
import ToolButton from './tool-button/tool-button.jsx';

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.state = {toolBar:"select",
                  value: '',isHovered: true}
    this.onSubmit = this.onSubmit.bind(this);  
    
  }
  onSubmit(event) {
    this.props.changeToolSelect()
    this.setState({
      isHovered: true
    })
    event.preventDefault();

    // this.setState({
    //   toolBar:value
    // })

}
  // componentDidMount(event){
  //   const domElementToManipulateState = document.getElementById('state-changer');
  //   domElementToManipulateState.addEventListener('change', this.changeState);
  // }
  render(){
    return (
      <div id="tool-bar">
        <form onSubmit={this.onSubmit} style={{display:"none"}}>
          <input type="text" id="hover-state-changer-input" onChange={event => this.setState({ value: event.target.value })}></input>
          <input type="submit" id="hover-state-changer"></input>
        </form>
        <ToolButton click={this.props.changeToolSelect} toolName="tool-select" icon="fas fa-location-arrow" isHovered={this.state.isHovered} />
        <ToolButton click={this.props.changeToolLand} toolName="tool-land" icon="fas fa-globe-americas" />
        <ToolButton click={this.props.changeToolText} toolName="tool-text" icon="fas fa-map-signs" />
        <ToolButton click={this.props.changeToolForest} toolName="tool-forest" icon="fas fa-tree" />
        <ToolButton click={this.props.changeToolRoad} toolName="tool-road" icon="fas fa-road" isDisabled={true} />
        <ToolButton click={this.props.changeToolLandmark} toolName="tool-landmark" icon="fab fa-fort-awesome" isDisabled={true} />
        <ToolButton click={this.props.changeToolMap} toolName="tool-map" icon="fas fa-map" />
      </div>  
    );
  }
}
export default ToolBar;