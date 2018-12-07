import React, { Component } from 'react';
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import api from "../../../../api";
class AttributesMap extends Component{
    constructor(props){
        super(props);
        this.state={
            save:true,redirect:""
        }
        this.handleSave = this.handleSave.bind(this)
        this.redirect = {};
    }
    handleSave = async () =>{
        if(this.state.save){
            this.setState({save:false})
            document.getElementById("save-btn").innerHTML = "Map Saved!"
            let svg = document.getElementById("svgjs-canvas");
            if(svg){
                console.log(document.getElementById("svgjs-canvas").innerHTML)
                let { data } = await api.saveMap(this.props.map.substr(1), document.getElementById("svgjs-canvas").innerHTML);
                console.log("data",data)
            }
            setTimeout(()=>{
                if(document.getElementById("save-btn")){
                    document.getElementById("save-btn").innerHTML = "Save"
                    this.setState({save:true})
                }
            },2000)
        }
    }
    handleLoad = async () =>{
        let { data } = await api.getMap(this.props.map.substr(1));
        if(data.body){
            const element = new DOMParser().parseFromString(data.body, "text/xml");
            let svgInside = element.children[0];
            document.getElementById("load-box").appendChild(svgInside);
        }
    }
    componentWillMount(){
        if(this.props.map == ""){
            this.setState({redirect:<Redirect to={"/profile/"+ this.props.userInfo._id}></Redirect>})
        } else {
            this.handleLoad();
        }
    }
    render(){
        return (
            <div>
                    {this.state.redirect}
                <div id="load-box" style={{display:"none"}} />
                 <div className="attribute-items">
                     <div className="attribute-row">
                         <div id="save-btn" className="attribute-save" onClick={this.handleSave}>Save</div>
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
const mapStateToProps = state => {
    return state;
  };
  
AttributesMap = connect(mapStateToProps, null)(AttributesMap);
export default AttributesMap;
