import React, { Component } from 'react';
import './index-body.css';
import Slider from "./slider/slider.jsx";
import IconDisplay from "./icon-display/icon-display.jsx";
import FullLogoDisplay from "./full-logo-display/full-logo-display.jsx";
import SingleFeature from "./single-feature/single-feature.jsx";
import FeatureList from "./feature-list/feature-list.jsx";
import Footer from "./footer/footer.jsx";

class IndexBody extends Component {
    render() {
        let featureList = ["Fast","Customizable","Fantasy-Oriented","Easy Import","Easy Export","Easy to Use","Easy to Learn","Free","Hundreds of assets to use"];
        return (
          <div id="index-content">
            <Slider />
            <IconDisplay />
            <SingleFeature
              heading="This is a heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image="https://via.placeholder.com/500x200"
              order="1" />
            <FullLogoDisplay />
            <SingleFeature
              heading="This is a heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image="https://via.placeholder.com/500x200"
              order="2" />
            <FeatureList features={featureList} />
            <Footer />
          </div>  
       );
    }
}
export default IndexBody;