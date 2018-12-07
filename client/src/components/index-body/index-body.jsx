import React, { Component } from 'react';
import './index-body.css';
import Slider from "./slider/slider.jsx";
import IconDisplay from "./icon-display/icon-display.jsx";
import FullLogoDisplay from "./full-logo-display/full-logo-display.jsx";
import SingleFeature from "./single-feature/single-feature.jsx";
import FeatureList from "./feature-list/feature-list.jsx";
import Footer from "./footer/footer.jsx";

class IndexBody extends Component {
  constructor(props){
    super(props);
    this.state = {played:false}
  }
  loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.type = "text/javascript"
    tag.src = src; 
    document.getElementById("index-content").appendChild(tag);
  }
  getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  componentDidMount(evt){
    var splashCookieValue = this.getCookieValue("splashCookie");
    var d = new Date();
    var validCookie = splashCookieValue != "" && parseInt(splashCookieValue) > d.getTime();
    if(!validCookie){
      document.cookie = "splashCookie=" + (d.getTime() + 300000);
      this.setState({played:true})
      var css = `#sn_loadsvg {
          animation: sn_anim_opacity_out 1.5s 3.4s ease !important;
          width:100% !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          display:block !important;
        }
        #root {
            display: none !important;
            opacity: 0 !important;
            animation: sn_anim_opacity 1.5s paused !important;
        }`;
      var container = document.getElementById("index-content"),
      style = document.createElement('style');
      style.type = 'text/css';
      style.id = "splash-style"
      if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
      } else {
      style.appendChild(document.createTextNode(css));
      }
      container.appendChild(style);
      this.loadScript("/scripts/splashscreen.js");
    } 
  }
    render() {
        let featureList = ["Fast","Customizable","Fantasy-Oriented","Easy Import","Easy Export","Easy to Use","Easy to Learn","Free","Hundreds of assets to use"];
        return (
          <div id="index-content">
           
            <Slider />
            <IconDisplay />
            <SingleFeature
              heading="Take your RPG experience to the next level!"
              text="No more hand drawn bland black and white maps. Salamander.Ninja uses the power of SVG images to create vast colorful and infinitely expanding maps to the extreme. You can build out an immersive world from scratch within seconds. You can take your maps to your next Dungeons & Dragons campaign, put it in your upcoming hit of fantasy novel, or use it the game of your dreams. How you use your amazing maps is up you!"
              image="https://via.placeholder.com/500x200"
              order="1" />
            <FullLogoDisplay />
            <SingleFeature
              heading="Free to use!"
              text="Anything you make with Salamander.Ninja is your to use however you like. There is no paywall behind the service, so feel free to get going and make as many maps as you'd like! We hope our service can be used to improve your fantasy experiences, and are humble to aid you in your adventures. Good luck!"
              image="https://via.placeholder.com/500x200"
              order="2" />
            <FeatureList features={featureList} />
            <Footer />
          </div>  
       );
    }
}
export default IndexBody;