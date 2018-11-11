import React, { Component } from 'react';
import './map-maker.css';
import SideBar from './side-bar/side-bar.jsx';
import ToolBar from './tool-bar/tool-bar.jsx';

class MapMaker extends Component {
    constructor(props) {
        super(props)
        this.state = {tool:"select"}
    }
    changeToolSelect(event){
        this.setState({
            tool: "select"
        });
    }
    changeToolLand(event){
        this.setState({
            tool: "land"
        });
    }
    changeToolText(event){
        this.setState({
            tool: "text"
        });
    }
    changeToolForest(event){
        this.setState({
            tool: "forest"
        });
    }
    changeToolMountain(event){
        this.setState({
            tool: "mountain"
        });
    }
    changeToolRiver(event){
        this.setState({
            tool: "river"
        });
    }
    changeToolRoad(event){
        this.setState({
            tool: "road"
        });
    }
    changeToolLandmark(event){
        this.setState({
            tool: "landmark"
        });
    }
    changeToolMap(event){
        this.setState({
            tool: "map"
        });
    }
    render() {
        return (
            <section id="main-content">
                <ToolBar changeToolSelect={this.changeToolSelect.bind(this)}
                    changeToolSelect={this.changeToolSelect.bind(this)}
                    changeToolLand={this.changeToolLand.bind(this)}
                    changeToolText={this.changeToolText.bind(this)}
                    changeToolForest={this.changeToolForest.bind(this)}
                    changeToolMountain={this.changeToolMountain.bind(this)}
                    changeToolRiver={this.changeToolRiver.bind(this)}
                    changeToolRoad={this.changeToolRoad.bind(this)}
                    changeToolLandmark={this.changeToolLandmark.bind(this)}
                    changeToolMap={this.changeToolMap.bind(this)}/>
                <SideBar tool={this.state.tool} />
                <div id="map-container">
                    <canvas id="map-canvas" resize="true"></canvas>
                    <div id="text-editor" tabIndex="1" contentEditable></div>
                </div>
                <div id="svgjs-canvas"></div>
                <link id="css_fonts" href="https://fonts.googleapis.com/css?family=Aldrich|Alegreya+Sans+SC|Alfa+Slab+One|Audiowide|Bangers|Black+Ops+One|Bungee+Inline|Bungee+Shade|Cabin+Sketch|Cardo|Caveat|Caveat+Brush|Charmonman|Chewy|Cinzel|Cookie|Covered+By+Your+Grace|Creepster|Damion|Dancing+Script|Eater|Ewert|Faster+One|Federant|Fontdiner+Swanky|Francois+One|Fredoka+One|Frijole|Fugaz+One|Geo|Gloria+Hallelujah|Gochi+Hand|Hanalei+Fill|Hanuman|Knewave|Kumar+One+Outline|Lobster|Luckiest+Guy|Mali|Merienda|Metamorphous|Monoton|Nosifer|Oleo+Script|Orbitron|Oswald|Pacifico|Patrick+Hand|Pattaya|Poller+One|Poor+Story|Press+Start+2P|Righteous|Rock+Salt|Rubik+Mono+One|Rye|Sacramento|Seaweed+Script|Shadows+Into+Light|Shojumaru|Spicy+Rice|Srisakdi|Titan+One|Ultra" rel="stylesheet"/>
            </section>
        );
    }
}
export default MapMaker;