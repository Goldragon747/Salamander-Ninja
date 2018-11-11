import React from 'react';
import './search.css';

export default props => {
   return (
	    <div id="side-bar-search">
            <input id="side-bar-search-input" type="text" placeholder="Search..." />
            <a id="side-bar-search-a">
            <i id="side-bar-search-icon" className="fas fa-search"></i>
            </a>
        </div>
   );
};



