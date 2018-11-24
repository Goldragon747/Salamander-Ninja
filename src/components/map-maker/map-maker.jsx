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
        var currentState = this.state.tool;
        return (
            <section id="main-content">
                <ToolBar toolState={currentState}
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
                    <div id="svgjs-canvas"></div>
                    <div id="canvas-overlay"></div>
                    <canvas id="map-canvas" resize="true"></canvas>
                    <canvas id="download-canvas" resize="true"></canvas>
                    <div id="text-editor" tabIndex="1" contentEditable></div>
                </div>
                {/* <link id="css_fonts" href="https://fonts.googleapis.com/css?family=Aldrich|Alegreya+Sans+SC|Alfa+Slab+One|Audiowide|Bangers|Black+Ops+One|Bungee+Inline|Bungee+Shade|Cabin+Sketch|Cardo|Caveat|Caveat+Brush|Charmonman|Chewy|Cinzel|Cookie|Covered+By+Your+Grace|Creepster|Damion|Dancing+Script|Eater|Ewert|Faster+One|Federant|Fontdiner+Swanky|Francois+One|Fredoka+One|Frijole|Fugaz+One|Geo|Gloria+Hallelujah|Gochi+Hand|Hanalei+Fill|Hanuman|Knewave|Kumar+One+Outline|Lobster|Luckiest+Guy|Mali|Merienda|Metamorphous|Monoton|Nosifer|Oleo+Script|Orbitron|Oswald|Pacifico|Patrick+Hand|Pattaya|Poller+One|Poor+Story|Press+Start+2P|Righteous|Rock+Salt|Rubik+Mono+One|Rye|Sacramento|Seaweed+Script|Shadows+Into+Light|Shojumaru|Spicy+Rice|Srisakdi|Titan+One|Ultra" rel="stylesheet"/>
                <script
                    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js"></script>
                <script src="/scripts/svgsaver.js"></script>
                <script type="text/paperscript" src="scripts/paperscript.js" canvas="map-canvas"></script>
                <script src="/scripts/script.js"></script>
                <script src="/scripts/spectrum-config.js"></script> */}
            </section>
        );
    }
}
export default MapMaker;