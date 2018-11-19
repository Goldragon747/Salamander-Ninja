import React, { Component } from 'react';
import Textures from './textures-list.jsx';
class AttributesLand extends Component{
    constructor(){
        super();
        this.state={
            borderValue: 0,
            sliderValue:0,
            textures:false,
            textureName:"none",
            backgroundImage:"none",
        }
        this.onSubmit = this.onSubmit.bind(this);  
    }
    borderChange(event){
        const inputBorder = event.target.value
        if(parseInt(inputBorder) > 0 && parseInt(inputBorder) < 100) {
            this.setState({
                borderValue: parseInt(inputBorder)
            })
        } else if(parseInt(inputBorder) > 100){
            this.setState({
                borderValue: 100
            })
        } else {
            let prevState = this.state.borderValue;
            this.setState({
                borderValue: prevState
            })
        }
        
    }
    borderChangeUp(event){
        let prevState = this.state.borderValue;
        this.setState({
            borderValue: prevState + 1
        })
    }
    borderChangeDown(event){
        let prevState = this.state.borderValue;
        if(prevState > 0){
            this.setState({
                borderValue: prevState - 1
            })
        }
    }
    sliderChange(event){
        const inputSlider = event.target.value;
        if(parseInt(inputSlider) > 0 && parseInt(inputSlider) <= 100) {
            this.setState({
                sliderValue: parseInt(inputSlider)
            })
        } else if(parseInt(inputSlider) >= 100){
            this.setState({
                sliderValue: 100
            })
        } else {
            let prevState = this.state.borderValue;
            this.setState({
                sliderValue: prevState
            })
        }
    }
    texturesClicked(event){
        let prevState = this.state.textures;
        this.setState({
            textures: !prevState
        })
    }
    changeTexture(texture){
        this.setState({
            backgroundImage: texture.backgroundImage,
            textureName: texture.name
        })
    }
    onSubmit(event) {
        event.preventDefault();
        this.setState({
            borderValue: parseInt(document.getElementById("border-state-changer-input").value)
        })
    }
    render(){
        var updater = this.changeTexture;
        let textures = this.state.textures ? <div className="dropdown-list"><Textures update={updater.bind(this)} /></div> : "";
        let fillText = this.props.select ?
            "Sets the default color of the element that is selected.": 
            "Sets the default color of the inside of each element drawn by the Land Tool.";
        let borderSizeText = this.props.select ?
            "Sets the border size of the element that is selected.": 
            "Sets the default border size of each element drawn by the Land Tool.";
        let borderFillText = this.props.select ?
            "Sets the border color, if there is a border size above 0, of the element that is selected.": 
            "Sets the default border color, if there is a border size above 0, of each element drawn by the Land Tool.";
        let textureText = this.props.select ?
            "Sets the texture of the element that is selected.": 
            "Sets the default texture of each element drawn by the Land Tool.";
        let textureColorText = this.props.select ?
            "Sets the texture color of the element that is selected.": 
            "Sets the default texture color of each element drawn by the Land Tool.";
        let landifyText = this.props.select ?
            "Applies an algorithm to shape the selected element to look more more like a landmass. 0 turns the algorithm off, 100 is the most random.": 
            "Applies an algorithm to shape the default element drawn by the Land Tool to look more like a landmass. 0 turns the algorithm off, 100 is the most random.";
        let tip = <span className="help-tip">Tip: </span>;

        let fillID = this.props.select ? "select-land-fill-input" : "land-fill-input";
        let borderID = this.props.select ? "select-land-border-size-input" : "land-border-size-input";
        let borderFillID = this.props.select ? "select-land-border-fill-input" : "land-border-fill-input";
        let textureFillID = this.props.select ? "select-land-texture-fill-input" : "land-texture-fill-input";
        let containerID = this.props.select ? "select-land-container" : "land-container";
        let textureContainerID = this.props.select ? "select-texture-row" : "texture-row";
        let form = this.props.select ?  <form onSubmit={this.onSubmit} style={{display:"none"}}>
                                            <input type="text" id="border-state-changer-input"></input>
                                            <input type="submit" id="border-state-changer"></input>
                                        </form> : "";
        return (
            <div id={containerID}>
                {form}
                 <div className="attribute-items">
                     <div className="attribute-row">
                         <label>Color <i className="fas fa-question-circle"><div className="help">{tip}{fillText}</div></i></label>
                         <input id={fillID} type="color"></input>
                     </div>
                     <div className="attribute-row">
                         <label>Border Size <i className="fas fa-question-circle"><div className="help">{tip}{borderSizeText}</div></i></label>
                         <input id={borderID} className="attribute-input-number" type="text" value={this.state.borderValue} onChange={this.borderChange.bind(this)}></input>
                         <div className="value-changer-container">
                             <div className="value-changer-up" onClick={this.borderChangeUp.bind(this)}>
                                 <i className="fas fa-sort-up"></i>
                             </div>
                             <div className="value-changer-down" onClick={this.borderChangeDown.bind(this)}>
                                 <i className="fas fa-sort-down"></i>
                             </div>
                         </div>
                     </div>
                     <div className="attribute-row">
                         <label>Border Color <i className="fas fa-question-circle"><div className="help">{tip}{borderFillText}</div></i></label>
                         <input id={borderFillID} type="color" value="#000" readOnly></input>
                     </div>
                     <div className="attribute-row" id={textureContainerID}>
                         <label>Texture <i className="fas fa-question-circle"><div className="help">{tip}{textureText}</div></i></label>
                         <div id="land-texture-dropdown" name={this.state.textureName} className="dropdown-display" style={{backgroundImage:this.state.backgroundImage}} onClick={this.texturesClicked.bind(this)}>
                             {textures}
                         </div>
                     </div>
                     <div className="attribute-row">
                         <label>Texture Color <i className="fas fa-question-circle"><div className="help">{tip}{textureColorText}</div></i></label>
                         <input id={textureFillID} type="color" value="#000" readOnly></input>
                     </div>
                     <div className="attribute-row">
                         <label className="disabled">Landify <i className="fas fa-question-circle"><div className="help">{tip}{landifyText}</div></i></label>
                         <input id="land-texture-opacity-label" disabled className="attribute-slider-label" type="text" value={this.state.sliderValue} onChange={this.sliderChange.bind(this)}></input>
                         <input id="land-texture-opacity-input" disabled className="attribute-slider" type="range" min="0" max="100" value={this.state.sliderValue} onChange={this.sliderChange.bind(this)}></input>
                     </div>
                 </div>
            </div>
        );
    }
}
export default AttributesLand;

