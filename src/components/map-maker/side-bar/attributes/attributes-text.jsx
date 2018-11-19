import React, { Component } from 'react';
import Fonts from './fonts.jsx';
class AttributesText extends Component{
    increments = [1,2,3,4,6,8,12,18,24,32,48,72,128];
    constructor(){
        super();
        this.state={
            fonts: false,
            fontName:"Mukta",
            fontClass:"font-mukta",
            sizeValue: 12,
        }
        this.onSubmit = this.onSubmit.bind(this);  
    }
    fontClicked(event){
        let prevState = this.state.fonts;
        this.setState({
            fonts: !prevState
        })
    }
    changeFont(name, className){
        this.setState({
            fontName: name
        })
        this.setState({
            fontClass: className
        })
    }
    sizeChange(event){
        const inputSize = event.target.value
        if(parseInt(inputSize) > 0 && parseInt(inputSize) < 128) {
            this.setState({
                sizeValue: parseInt(inputSize)
            })
        } else if(parseInt(inputSize) > 128){
            this.setState({
                sizeValue: 128
            })
        } else {
            let prevState = this.state.sizeValue;
            this.setState({
                sizeValue: prevState
            })
        }
        
    }
    sizeChangeUp(event){
        let prevState = this.state.sizeValue;
        for (let index = 0; index < this.increments.length; index++) {
            //          12                  11                12                    11            12                       11
            if(this.increments[index] > prevState){
                this.setState({
                    sizeValue: this.increments[index]
                });
                return;
            } else if(this.increments[index] == prevState && prevState != 128){
                this.setState({
                    sizeValue: this.increments[index + 1]
                });
                return;
            }
        }
        
    }
    sizeChangeDown(event){
        let prevState = this.state.sizeValue;
        for (let index = this.increments.length - 1; index >= 0; index--) {
            if(this.increments[index] < prevState){
                this.setState({
                    sizeValue: this.increments[index]
                });
                return;
            } else if(this.increments[index] == prevState && prevState != 1){
                this.setState({
                    sizeValue: this.increments[index - 1]
                });
                return;
            }
        }
    }
    onSubmit(event) {
        event.preventDefault();
        this.setState({
            fontName: document.getElementById("text-font-state-changer-input").value,
            fontClass: document.getElementById("text-font-class-state-changer-input").value,
            sizeValue: parseInt(document.getElementById("text-size-state-changer-input").value),
        })
    }
    render(){
        var updater = this.changeFont;
        let fonts = this.state.fonts ? <div className="dropdown-list"><Fonts update={updater.bind(this)} /></div> : "";
        let colorText = this.props.select ?
            "Sets the default color of the text that is selected.": 
            "Sets the default color of the text of each text drawn by the Text Tool.";
        let sizeText = this.props.select ?
            "Sets the text size of the element that is selected.": 
            "Sets the default text size of each text drawn by the Text Tool.";
        let fontText = this.props.select ?
            "Sets the font family of the text that is selected.": 
            "Sets the default font family of each text drawn by the Text Tool.";
        let tip = <span className="help-tip">Tip: </span>;

        let fillID = this.props.select ? "select-text-fill-input" : "text-fill-input";
        let sizeID = this.props.select ? "select-text-size-input" : "text-size-input";
        let fontDropdownID = this.props.select ? "select-text-font-dropdown" : "text-font-dropdown";
        let fontID = this.props.select ? "select-font-value" : "font-value";
        let containerID = this.props.select ? "select-text-container" : "text-container";
        let form = this.props.select ?  <form onSubmit={this.onSubmit} style={{display:"none"}}>
                                            <input type="text" id="text-size-state-changer-input"></input>
                                            <input type="text" id="text-font-state-changer-input"></input>
                                            <input type="text" id="text-font-class-state-changer-input"></input>
                                            <input type="submit" id="text-state-changer"></input>
                                        </form> : "";
        return (
            <div id={containerID}>
                {form}
                 <div className="attribute-items">
                     <div className="attribute-row">
                         <label>Text Color <i className="fas fa-question-circle"><div className="help">{tip}{colorText}</div></i></label>
                         <input id={fillID} type="color" value="#000" readOnly></input>
                     </div>
                     <div className="attribute-row">
                         <label>Text Size <i className="fas fa-question-circle"><div className="help">{tip}{sizeText}</div></i></label>
                         <input id={sizeID} className="attribute-input-number" type="text" value={this.state.sizeValue} onChange={this.sizeChange.bind(this)}></input>
                         <div className="value-changer-container">
                             <div className="value-changer-up" onClick={this.sizeChangeUp.bind(this)}>
                                 <i className="fas fa-sort-up"></i>
                             </div>
                             <div className="value-changer-down" onClick={this.sizeChangeDown.bind(this)}>
                                 <i className="fas fa-sort-down"></i>
                             </div>
                         </div>
                     </div>
                     <div className="attribute-row">
                         <label>Text Font <i className="fas fa-question-circle"><div className="help">{tip}{fontText}</div></i></label>
                         <div id={fontDropdownID} className="dropdown-display" onClick={this.fontClicked.bind(this)}>
                             <span id={fontID} className={"font-display " + this.state.fontClass}>{this.state.fontName}</span>
                             {fonts}
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}
export default AttributesText;

