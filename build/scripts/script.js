if(document.getElementById("css_fonts")){
    document.getElementById("css_fonts").addEventListener("load",evt=>{
    
    })
}
//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                CANVAS EVENTS                                                                      //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
let currentTool = "select";
// // the current tool the app is using
// let currentTool = "select";

// //---------------------------------------------------------------------------------------------------------------------------------------------------//
// //                                                                                                                                                   //
// //                                                          TOOL BUTTON DEFINITIONS                                                                  //
// //                                                                                                                                                   //
// //---------------------------------------------------------------------------------------------------------------------------------------------------//

// Tool bar buttons
// const selectButton = document.getElementById("tool-select");
// const landButton = document.getElementById("tool-land");
// const textButton = document.getElementById("tool-text");
// const forestButton = document.getElementById("tool-forest");
// const mountainButton = document.getElementById("tool-mountain");
// const riverButton = document.getElementById("tool-river");
// const roadButton = document.getElementById("tool-road");
// const landmarkButton = document.getElementById("tool-landmark");
// const mapButton = document.getElementById("tool-map");



// // Remove all the hover classes from the toolbar buttons
// const RemoveHovers = () => {
//     // all the tool bar buttons from above
//     let buttons = [selectButton, landButton, textButton, forestButton, mountainButton, riverButton, roadButton, landmarkButton, mapButton];
//     for (let i = 0; i < buttons.length; i++)
//         buttons[i].classList.remove("tool-hover");
// }

// // // Tool Containers
// // const selectContainer = document.getElementById("select-container");
// // const landContainer = document.getElementById("land-container");

// // // Remove all containers from the side bar
// // const RemoveContainers = () => {
// //     // all the side bar attribute containers from above
// //     let containers = [selectContainer, landContainer];
// //     for (let i = 0; i < containers.length; i++)
// //         containers[i].style.display = "none";
// // }
// // RemoveContainers();
// // selectContainer.style.display = "flex";
// //---------------------------------------------------------------------------------------------------------------------------------------------------//
// //                                                                                                                                                   //
// //                                                         TOOL BUTTON CLICK EVENTS                                                                  //
// //                                                                                                                                                   //
// //---------------------------------------------------------------------------------------------------------------------------------------------------//

// selectButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.select;
//     ToolButtonPreEvents("select",false);
//     selectButton.classList.add("tool-hover");
//     // selectContainer.style.display = "flex";
// });

// landButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.pen;
//     ToolButtonPreEvents("land");
//     landButton.classList.add("tool-hover");
//     // landContainer.style.display = "flex";
// });

// textButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.line;
//     ToolButtonPreEvents("text");
//     textButton.classList.add("tool-hover");
// });

// forestButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.square;
//     ToolButtonPreEvents("forest");
//     forestButton.classList.add("tool-hover");
// });

// mountainButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.square;
//     ToolButtonPreEvents("mountain");
//     mountainButton.classList.add("tool-hover");
// });

// riverButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.circle;
//     ToolButtonPreEvents("river");
//     riverButton.classList.add("tool-hover");
// });

// roadButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.icon;
//     ToolButtonPreEvents("road");
//     roadButton.classList.add("tool-hover");
// });

// mapButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.icon;
//     ToolButtonPreEvents("map");
//     mapButton.classList.add("tool-hover");
// });

// roadButton.addEventListener("click", evt => {
//     currentAttributesPane = attributePanes.icon;
//     ToolButtonPreEvents("road");
//     roadButton.classList.add("tool-hover");
// });

// // Helper method for Tool Button Clicks
// const ToolButtonPreEvents = (label, stop = true) => {
//     // Removes all hover events from the tool buttons
//     RemoveHovers();
//     // Sets the current tool for the canvas
//     currentTool = label;
//     // Remove all attribute pane containers
//     // RemoveContainers();
// }

const RemoveAllAttributePanes = () => {
    for (var key in attributePanes){ 
        attributePanes[key].container.style.display = "none";
    }
}








//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                   Attributes                                                                      //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
let currentAttributesPane = {};

let attributePanes = {};
// Has to be on load because of Spectrum Library
window.onload = function() {
    // attributePanes = {
    //     "select": {
    //         container: document.getElementById("select-container"),
    //         name: document.getElementById("select-name-input"),
    //         nameLabel: document.getElementById("select-name-label"),
    //         x: document.getElementById("select-x-input"),
    //         xLabel: document.getElementById("select-x-label"),
    //         y: document.getElementById("select-y-input"),
    //         yLabel: document.getElementById("select-y-label"),
    //         scale: document.getElementById("select-scale-input"),
    //         scaleLabel: document.getElementById("select-scale-label"),
    //         fill: document.getElementById("select-fill-input"),
    //         fillLabel: document.getElementById("select-fill-label"),
    //         fillChange: changeSelectFillInput,
    //         fillEnable: enableSelectFillInput,
    //         fillDisable: disableSelectFillInput,
    //         borderWidth: document.getElementById("select-border-width-input"),
    //         borderWidthLabel: document.getElementById("select-border-width-label"),
    //         borderColor: document.getElementById("select-border-fill-input"),
    //         borderColorLabel: document.getElementById("select-border-fill-label"),
    //         borderChange: changeSelectBorderInput,
    //         borderEnable: enableSelectBorderInput,
    //         borderDisable: disableSelectBorderInput
    //     },
    //     "pen": {
    //         container: document.getElementById("pen-container"),
    //         name: document.getElementById("pen-name-input"),
    //         nameLabel: document.getElementById("pen-name-label"),
    //         x: document.getElementById("pen-x-input"),
    //         xLabel: document.getElementById("pen-x-label"),
    //         y: document.getElementById("pen-y-input"),
    //         yLabel: document.getElementById("pen-y-label"),
    //         scale: document.getElementById("pen-scale-input"),
    //         scaleLabel: document.getElementById("pen-scale-label"),
    //         fill: document.getElementById("pen-fill-input"),
    //         fillLabel: document.getElementById("pen-fill-label"),
    //         fillChange: changePenFillInput,
    //         fillEnable: enablePenFillInput,
    //         fillDisable: disablePenFillInput,
    //         borderWidth: document.getElementById("pen-border-width-input"),
    //         borderWidthLabel: document.getElementById("pen-border-width-label"),
    //         borderColor: document.getElementById("pen-border-fill-input"),
    //         borderColorLabel: document.getElementById("pen-border-fill-label"),
    //         borderChange: changePenBorderInput,
    //         borderEnable: enablePenBorderInput,
    //         borderDisable: disablePenBorderInput
    //     },
    //     "line": {
    //         container: document.getElementById("line-container"),
    //         name: document.getElementById("line-name-input"),
    //         nameLabel: document.getElementById("line-name-label"),
    //         x: document.getElementById("line-x-input"),
    //         xLabel: document.getElementById("line-x-label"),
    //         y: document.getElementById("line-y-input"),
    //         scale: document.getElementById("line-scale-input"),
    //         yLabel: document.getElementById("line-y-label"),
    //         scaleLabel: document.getElementById("line-scale-label"),
    //         borderWidth: document.getElementById("line-border-width-input"),
    //         borderWidthLabel: document.getElementById("line-border-width-label"),
    //         borderColor: document.getElementById("line-border-fill-input"),
    //         borderColorLabel: document.getElementById("line-border-fill-label"),
    //         borderChange: changeLineBorderInput,
    //         borderEnable: enableLineBorderInput,
    //         borderDisable: disableLineBorderInput
    //     },
    //     "square" : {
    //         container: document.getElementById("square-container"),
    //         name: document.getElementById("square-name-input"),
    //         nameLabel: document.getElementById("square-name-label"),
    //         x: document.getElementById("square-x-input"),
    //         xLabel: document.getElementById("square-x-label"),
    //         y: document.getElementById("square-y-input"),
    //         yLabel: document.getElementById("square-y-label"),
    //         scale: document.getElementById("square-scale-input"),
    //         scaleLabel: document.getElementById("square-scale-label"),
    //         fill: document.getElementById("square-fill-input"),
    //         fillLabel: document.getElementById("square-fill-label"),
    //         fillChange: changeSquareFillInput,
    //         fillEnable: enableSquareFillInput,
    //         fillDisable: disableSquareFillInput,
    //         borderWidth: document.getElementById("square-border-width-input"),
    //         borderWidthLabel: document.getElementById("square-border-width-label"),
    //         borderColor: document.getElementById("square-border-fill-input"),
    //         borderColorLabel: document.getElementById("square-border-fill-label"),
    //         borderChange: changeSquareBorderInput,
    //         borderEnable: enableSquareBorderInput,
    //         borderDisable: disableSquareBorderInput
    //     },
    //     "circle": {
    //         container: document.getElementById("circle-container"),
    //         name: document.getElementById("circle-name-input"),
    //         nameLabel: document.getElementById("circle-name-label"),
    //         x: document.getElementById("circle-x-input"),
    //         xLabel: document.getElementById("circle-x-label"),
    //         y: document.getElementById("circle-y-input"),
    //         yLabel: document.getElementById("circle-y-label"),
    //         scale: document.getElementById("circle-scale-input"),
    //         scaleLabel: document.getElementById("circle-scale-label"),
    //         fill: document.getElementById("circle-fill-input"),
    //         fillLabel: document.getElementById("circle-fill-label"),
    //         fillChange: changeCircleFillInput,
    //         fillEnable: enableCircleFillInput,
    //         fillDisable: disableCircleFillInput,
    //         borderWidth: document.getElementById("circle-border-width-input"),
    //         borderWidthLabel: document.getElementById("circle-border-width-label"),
    //         borderColor: document.getElementById("circle-border-fill-input"),
    //         borderColorLabel: document.getElementById("circle-border-fill-label"),
    //         borderChange: changeCircleBorderInput,
    //         borderEnable: enableCircleBorderInput,
    //         borderDisable: disableCircleBorderInput
    //     },
    //     "icon": {
    //         container: document.getElementById("icon-container"),
    //         name: document.getElementById("icon-name-input"),
    //         nameLabel: document.getElementById("icon-name-label"),
    //         x: document.getElementById("icon-x-input"),
    //         xLabel: document.getElementById("icon-x-label"),
    //         y: document.getElementById("icon-y-input"),
    //         yLabel: document.getElementById("icon-y-label"),
    //         scale: document.getElementById("icon-scale-input"),
    //         scaleLabel: document.getElementById("icon-scale-label"),
    //         fill: document.getElementById("icon-fill-input"),
    //         fillLabel: document.getElementById("icon-fill-label"),
    //         fillChange: changeIconFillInput,
    //         fillEnable: enableIconFillInput,
    //         fillDisable: disableIconFillInput,
    //         borderWidth: document.getElementById("icon-border-width-input"),
    //         borderWidthLabel: document.getElementById("icon-border-width-label"),
    //         borderColor: document.getElementById("icon-border-fill-input"),
    //         borderColorLabel: document.getElementById("icon-border-fill-label"),
    //         borderChange: changeIconBorderInput,
    //         borderEnable: enableIconBorderInput,
    //         borderDisable: disableIconBorderInput
    //     }
    // };
    const AddAttributeListeners = () => {
        attributePanes["select"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["select"].name.value;
        });
        attributePanes["select"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["select"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["select"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["select"].y.value);
        });
        attributePanes["select"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["select"].scale.value, selectedObject.bbox().height * attributePanes["select"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["select"].scale.value;
        });
        attributePanes["select"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["select"].borderWidth.value});
        });

        attributePanes["pen"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["pen"].name.value;
        });
        attributePanes["pen"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["pen"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["pen"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["pen"].y.value);
        });
        attributePanes["pen"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["pen"].scale.value, selectedObject.bbox().height * attributePanes["pen"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["pen"].scale.value;
        });
        attributePanes["pen"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["pen"].borderWidth.value});
        });

        attributePanes["line"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["line"].name.value;
        });
        attributePanes["line"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["line"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["line"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["line"].y.value);
        });
        attributePanes["line"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["line"].scale.value, selectedObject.bbox().height * attributePanes["line"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["line"].scale.value;
        });
        attributePanes["line"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["line"].borderWidth.value});
        });

        attributePanes["square"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["square"].name.value;
        });
        attributePanes["square"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["square"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["square"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["square"].y.value);
        });
        attributePanes["square"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["square"].scale.value, selectedObject.bbox().height * attributePanes["square"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["square"].scale.value;
        });
        attributePanes["square"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["square"].borderWidth.value});
        });

        attributePanes["circle"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["circle"].name.value;
        });
        attributePanes["circle"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["circle"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["circle"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["circle"].y.value);
        });
        attributePanes["circle"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["circle"].scale.value, selectedObject.bbox().height * attributePanes["circle"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["circle"].scale.value;
        });
        attributePanes["circle"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["circle"].borderWidth.value});
        });

        attributePanes["icon"].name.addEventListener("keyup", evt => {
            selectedObject.node.attributes.name.nodeValue = attributePanes["icon"].name.value;
        });
        attributePanes["icon"].x.addEventListener("keyup", evt => {
            selectedObject.center(attributePanes["icon"].x.value, selectedObject.bbox().cy);
        });
        attributePanes["icon"].y.addEventListener("keyup", evt => {
            selectedObject.center(selectedObject.bbox().cx, attributePanes["icon"].y.value);
        });
        attributePanes["icon"].scale.addEventListener("keyup", evt => {
            selectedObject.size(selectedObject.bbox().width * attributePanes["icon"].scale.value, selectedObject.bbox().height * attributePanes["icon"].scale.value);
            selectedObject.node.attributes.scale.nodeValue = attributePanes["icon"].scale.value;
        });
        attributePanes["icon"].borderWidth.addEventListener("keyup", evt => {
            selectedObject.stroke({width:attributePanes["icon"].borderWidth.value});
        });
    }
    // AddAttributeListeners();
    // RemoveAllAttributePanes();
    // currentAttributesPane = attributePanes.select;
    // currentAttributesPane.container.style.display = "block";
};

const DisableAllAttributePanes = () => {
    for (var key in attributePanes){
        if(attributePanes[key].name){
            attributePanes[key].name.disabled = true;
            attributePanes[key].name.value = "";
        }
        if(attributePanes[key].nameLabel)
            attributePanes[key].nameLabel.classList.add("disabled");
        if(attributePanes[key].x){
            attributePanes[key].x.disabled = true;
            attributePanes[key].x.value = "";
        }
        if(attributePanes[key].xLabel)
            attributePanes[key].xLabel.classList.add("disabled");
        if(attributePanes[key].y){
            attributePanes[key].y.disabled = true;
            attributePanes[key].y.value = "";
        }
        if(attributePanes[key].yLabel)
            attributePanes[key].yLabel.classList.add("disabled");
        if(attributePanes[key].scale){
            attributePanes[key].scale.disabled = true;
            attributePanes[key].scale.value = "";
        }
        if(attributePanes[key].scaleLabel)
            attributePanes[key].scaleLabel.classList.add("disabled");
        if(attributePanes[key].fill){
            attributePanes[key].fillDisable();
            attributePanes[key].fillChange("rgb(0,0,0)");
        }
        if(attributePanes[key].fillLabel)
            attributePanes[key].fillLabel.classList.add("disabled");
        if(attributePanes[key].borderWidth){
            attributePanes[key].borderWidth.disabled = true;
            attributePanes[key].borderWidth.value = "";
        }
        if(attributePanes[key].borderWidthLabel)
            attributePanes[key].borderWidthLabel.classList.add("disabled");
        if(attributePanes[key].borderColor){
            attributePanes[key].borderDisable();
            attributePanes[key].borderChange("rgb(0,0,0)");
        }
        if(attributePanes[key].borderColorLabel)
            attributePanes[key].borderColorLabel.classList.add("disabled");
    }
}
const EnableCurrentAttributePane = () => {
    if(currentAttributesPane.name){
        currentAttributesPane.name.disabled = false;
        currentAttributesPane.name.value = selectedObject.node.attributes.name ? selectedObject.node.attributes.name.nodeValue : "";
    }
    if(currentAttributesPane.nameLabel)
        currentAttributesPane.nameLabel.classList.remove("disabled");
    if(currentAttributesPane.x){
        currentAttributesPane.x.disabled = false;
        console.log("bbox",selectedObject.bbox())
        currentAttributesPane.x.value = selectedObject.node.attributes.cx ? selectedObject.node.attributes.cx.nodeValue : "";
    }
    if(currentAttributesPane.xLabel)
        currentAttributesPane.xLabel.classList.remove("disabled");
    if(currentAttributesPane.y){
        currentAttributesPane.y.disabled = false;
        currentAttributesPane.y.value = selectedObject.node.attributes.cy ? selectedObject.node.attributes.cy.nodeValue : "";
    }
    if(currentAttributesPane.yLabel)
        currentAttributesPane.yLabel.classList.remove("disabled");
    if(currentAttributesPane.scale){
        currentAttributesPane.scale.disabled = false;
        currentAttributesPane.scale.value = selectedObject.node.attributes.scale ? selectedObject.node.attributes.scale.nodeValue : "";
    }
    if(currentAttributesPane.scaleLabel)
        currentAttributesPane.scaleLabel.classList.remove("disabled");
    if(currentAttributesPane.fill){
        currentAttributesPane.fillEnable();
        currentAttributesPane.fillChange(selectedObject.node.attributes.fill ? selectedObject.node.attributes.fill.nodeValue : "rgb(0,0,0)");
    }
    if(currentAttributesPane.fillLabel)
        currentAttributesPane.fillLabel.classList.remove("disabled");
    if(currentAttributesPane.borderWidth){
        currentAttributesPane.borderWidth.disabled = false;
        currentAttributesPane.borderWidth.value = selectedObject.node.attributes["stroke-width"] ? selectedObject.node.attributes["stroke-width"].nodeValue : "";
    }
    if(currentAttributesPane.borderWidthLabel)
        currentAttributesPane.borderWidthLabel.classList.remove("disabled");
    if(currentAttributesPane.borderColor){
        currentAttributesPane.borderEnable();
        currentAttributesPane.borderChange(selectedObject.node.attributes.stroke ? selectedObject.node.attributes.stroke.nodeValue : "rgb(0,0,0)")
    }
    if(currentAttributesPane.borderColorLabel)
        currentAttributesPane.borderColorLabel.classList.remove("disabled");
}



//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                     SELECT                                                                        //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//


// Binds an object to the attributes pane.
const BindObjectToAttributesPane = obj => {
    // Name Attribute
    currentAttributesPane.name.value = obj.node.attributes.name ? obj.node.attributes.name.nodeValue : "";
    // X Attribute (actually cx for user simplicity)
    currentAttributesPane.x.value = selectedObject.bbox().cx;
    // Y Attribute (actually cy for user simplicity)
    currentAttributesPane.y.value = selectedObject.bbox().cy;
    // Scale Attribute
    currentAttributesPane.scale.value = obj.node.attributes.scale ? obj.node.attributes.scale.nodeValue : 1;
    // Fill Attribute. Has to be handled in index.html due to Spectrum library, Ignore Error.
    currentAttributesPane.fillChange(selectedObject.fill()._stroke);
    // Border Width Attribute (actually strokeWidth for user simplicity)
    currentAttributesPane.borderWidth.value = obj.node.attributes.strokeWidth ? obj.node.attributes.strokeWidth.nodeValue : 0;
    // Border Color Attribute (actually stroke). Has to be handled in index.html due to Spectrum library, Ignore Error.
    currentAttributesPane.borderChange(selectedObject.stroke()._stroke);
    // changeBorderPicker(selectedObject.stroke()._stroke);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                              ICON PLACEMENT                                                                       //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//

// Test world svg for fun
var iconNum = 0;
let world = () => {
    return `<svg viewBox='0 0 1024 656' id="icon-${iconNum}" width="2000" height="2000">
        <pattern id="Pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <g fillRule="evenodd"><g fill="#3A4950"><path opacity=".5" d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z" /><path d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z" /></g></g>
        </pattern>
        <g>
            <rect width="100%" height="100%" fill="url(#Pattern)"></rect>
        	<path fill="#F78D23" id='south_america' d='M302.37,434.36l-.06-1.12l1.61-.37l.59,.1l-.11,2.11l-2.34,.31l-.5-.25L302.37,434.36zM309.41,631.56l-2.38-1.12l-3.36,2.7l1.4,2.05l2.38-2.05l1.26,1.59l3.79-1.36l.84-1.58l-2.24-2.01L309.41,631.56zM377.41,482.2l-.95-3.57l-1.02-.88l-2.4-.11l-2.16-.81l-3.58-3.13l-4.15-2.31l-4.19,.11l-5.46-1.47l-3.26,.86l.46-1.54l-1.37-1.63l-4.66-1.7l-3.53-1l-2.13,1.83l-.1-2.79l-4.96-.44l-.87-.84l2.11-2.29l-.08-1.92l-1.5-.46l-1.57-4.88l-.69-1.54l-.96,.13l-.46-1.14l-2.97-2.36l-2.06-.66l-.95-.31l-3.01-.75l-2.27,.2-.3,.5-3.36-.56-1.11-.98-1.5-1.37-1.06-.07-.08-1.45-1.73-1.83L307.7,440l-1.1-.66-1.46,.06-.45-2.26-2.13-1.39-2.24-.21-.96-1.34l2.38-.84-3.36,.04-3.47,.17-.03,.71-1.57,.88-2.14-.35-1.61-1.27-3,.29-2.52-.02-.11-.94-1.82-1.58-1.97-.05-1.01-2-.98,.9l.39,1.34-3.49,1.15l.14,2.15l.87,1-.63,2.04-1.21,.18-1.06-2.24l1.24-1.64l.03-1.48-.91-1.29l1.65-.33l.08-.67l.54-.96-.74-.75-.99-.17-1.36,1.37-1.09,.64-2.21,1.44-2.19-.24-.22,.59-1.77,.05-1.61,1.32-.52,2.39-.03,.93-1.15,.3-2.1,1.97-1.45-.09-.34,.41l.65,1.66-.53,.84-.9-.2-.36,1.37l1.14,1.5l.44,2.37-.6,.73l.63,2.56-.53,1.62l1.03,.66-1.07,1.46-1.18,1.75-1.39,.19-.66,1.01l.12,1.4-1.05,.21l.38,.87-1.93,1.11-1.54,.6l.2,1.14-1.06,1.79-.52,1.73-.98,.42l.47,2.53-.57,.79l1.68,1.22l1.07-1.29l.61,1.22-1.49,2.08-2.24,1.76-.87,1.96l1.36,2.67-.91,1.25l2,1.13l2.18,1.83l.88,2.07l1.15,1.28l2.65,5.62l2.76,5.24l2.37,3.75-.46,.83l1.16,2.37l2.16,1.78l5.03,3.17l5.56,2.92l.24,1.2l2.81,1.68l.58,4.15l.21,4.87-.88,6.75-.9,6.37-.51,6.04-1.64,3.87l.34,3.96-.84,2.67l.65,4.91-1.19,4.97-1.94,5.43-1.72,5.6-1.18,.11l.23,3.98l.81,3.5-1.29,2.48-.96,6.84-.88,5.42l1.77,.54l.88-4.75l1.88,1-1.46,7.97-3.12-1.37-.95,6.56-2.67,3.57l4.26,1.19-2.96,3.19-1.19,4.03l.36,7.34l1.41,2.94-.79,2.62l.88,2.87l3.49,2.63l3.21,3.25l3.16,1.54l1.19-.11l.45-4.38l2.53-1.67l1.35-1.13l2.49,.03l1.18,.23-1.87-2.63-.91-4.64l1.15-2.06l2.56-1.72l1.82-5.03l3.31-2.38l.96-3.73-2.68-.83-2.76-2.98l.8-3.01l2.2-2.04l2.65-.01l.66-2.11l.41-3.91l2.25-2.38l2.58-1.18-.84-1.96L294.9,594l-1.89-1.14-.39-3.71l1.08-.97l2.7,1.35l2.87-.51l1.68-1.3-.52-1.85l.57-2.72-.59-2.15l3.08,.36l5.62-.75l4.16-1.91l2.69-4.52l.14-1.7-1.75-1.51l.38-2.37-3.56-2.91l.19-1.76l1.71,1.87l1.9-.11l2.59,1.46l1.52-.36l2.07,.68l3.17-1.89l1.21-2.12l1.85-1.91l1.28-3.15l1.91-1.54l2.47-2.59l3.11-5.68l1.96-1.75l.64-1.55l.52-3.18-.47-1.73l.41-2.32l2.37-3.06l3.3-2.44l3.14-.89l1.97-1.35l4.41-1.17l3.05,.01l.66-1.81l2.27-1.3l.48-3.09l2.84-3.88l.5-3.94l.89-1.16l.3-1.93l.78-4.48-.2-5.4l.78-2.11l.7-.06l2.08-2.47l1.79-3.22l3.95-3.94l1.43-1.84l1.12-4.65L377.41,482.2zM285.29,642.4l-1.4-3.53-1.08-2.15-2-.54-2.58,1.91-.91,3.2-1.45,2.17-3.72-1.7-3.94-3.13-2.31-.97l3.86,5.25l2.86,2.57l3.53,2.71l2.94,.71l2.04,1.48l1.66,.4l1.38,.16l2.4-1.53l.93-1.98l1.43,1.73l2.66-.25l1.26-2.44-3.93-1.21L285.29,642.4z'/>
    		<path fill="#F78D23" id='north_america' d='M281.07,409.41l.09-.88-1.53,.06-.51-1.05-.74,.07-1.66-.76-2.19-.01-.35,.5-2.43-.47-1.71-.13-.63,.82l1.77,.46-.02,1.13l1.28,1.28-1.01,.65-2.12-.24-2.58-.41-.25,.95l1.5,.91l1.31-.55l1.71,.21l1.32-.2l1.86,.5l.14,.84l.72,.46l1.12-2.01l.93-.42l.43,.71l1.08-.18l.51-.54l.92,.14l1.29-.12l1.33,.64l1.04-1.2-1.38-1.08L281.07,409.41zM255.13,385.61l-1.32,.25l.2,1.15l3.05-.5-.08-.81L255.13,385.61zM256.02,390.76l-.61,1.95l1.05,.89l.71,1.76l.69-.15-.02-1.77-.98-2.55L256.02,390.76zM289.41,410.88l-2.29-.02-.4,.43l.16,1.26l1.64-.1l2.11,.02l.72-.74-.51-.59L289.41,410.88zM267.27,405.66l-2.12-1.22-2.07-.12l.2-.84-1.67-.61-.92,.04-1.75-1.35-2.37-1.86-.99-.71-2.62,.34-1.12-1.11-2.63-1.03-2.2-.03-2.42-.22-.68,.33-2.12,.29-1.43,.59-1.27,.67-.61,1.09-1.48,.93l1.2,.28l1.39-.33l.4-.73l1.16-.04l2.01-1.57l2.75,.15-1.05,.75l.98,.59l3.65,.47l.84,.63l2.61,.8l1.58-.12l.66,1.7l.97,.86l1.81,.2l1.14,.77-1.88,1.66l4.01-.29l1.93,.23l1.89-.15l1.86-.38L267.27,405.66zM259.65,411.22l-1.89-.26-.64-.1-1.18,.21-.34,.67l1.6,1.07l1.57,.47l.85-.49l1.97-.05-.46-.8L259.65,411.22zM258.87,388.7l.48-2.21l-2.22-1.41l.01,.36l1.26,1.23-.05,1.63L258.87,388.7zM32.17,401.38l-.75,.41l.11,.12l.36,.68l.98,.11l.2,.04l.15-.17-.81-.99L32.17,401.38zM27.77,399.82l-.43,.3-.15,.22l.94,.55l.33-.3-.06-.7L27.77,399.82zM34.14,403.23l1.5,.09l.09-.32-1.38-.13L34.14,403.23zM37.14,403.76l-1-.28-.27,.26l.02,.19l.32,.24l.48,.63l.94-.21l.23-.36L37.14,403.76zM8.5,250.59l-2.77,.97l1.7,1.52l1.84,1.04l1.72-.87-.27-2.15L8.5,250.59zM0,235.22l2.04-1.26l.23-.68L0,232.61V235.22zM139.07,126.88l5.21-5.05l2.62-.59l2.16-4.23l.38-9.77-3.85,1.91-4.3-.18-5.76,8.19-4.76,8.98l3.8,2.51L139.07,126.88zM145.21,136.27l3.92,1.95l12.67-1.3-5.82,4.77l.36,3.43l4.26-.24l7.07-4.58l9.5-1.67l1.71-5.22-.49-5.57-2.94-.5-2.5,1.93-1.1-4.13-.95-5.7-2.9-1.42-2.57,4.41l4.01,11.05-4.9-.85-4.98-6.79-7.89-4-2.64,3.32L145.21,136.27zM130.12,178.05l7.38-4.18V170l3.48-6.41l6.88-6.69l3.52-2.47-3.01-4.2-2.72-2.95-7.16-.57-4-2.16-9.48,1.63l2.74,6.23-2.43,6.43-1.94,6.87-1.2,3.86l6.47,4.69L130.12,178.05zM326.41,307.48l-1.96,.72l.87-3.11-2.8-1.32-1.29,1.05-2.49-1.18l.98-1.51-1.88-.93-1.83,1.47l1.86-3.82l1.5-2.8l.54-1.22-1.3-.2-2.43,1.55-1.74,2.53-2.9,6.92-2.35,2.56l1.22,1.14-1.75,1.47l.43,1.23l5.44,.13l3.01-.25l2.69,1.01-1.98,1.93l1.67,.14l3.25-3.58l.78,.53-.61,3.37l1.84,.77l1.27-.15l1.18-3.61-.87-2.59L326.41,307.48zM296.75,316.34l-.98-1.98-1.06,1.26l.7,1.36l3.56,1.71l1.04-.26l1.38-1.66-2.6,.11L296.75,316.34zM40.03,406.52l-.5-.26-1.07-.5-.21-.06-.16,.28l.19,.58-.49,.48-.14,.33l.46,1.08-.08,.83l.7,.42l.41-.49l.9-.46l1.1-.63l.07-.16-.71-1.04L40.03,406.52zM301.88,304.92l-2.87-1.8-3.69-1.09-.97,.37l2.61,2.04l3.63,1.34l1.36-.08L301.88,304.92zM439.45,42.64l-8.41-3.81-13.61,7.55-7.14,6.92l3.08-10.97-2.33-7.15-5.44,6.12-8.45-6.91-9.93,2.24L385.81,33l15.09-2.03l10.73-.92l5.18-8.31L399.27,3.15L376.87,0l-9.91,2.42-3.58,8.95-9.84-1.07-9.41,13.6-.38,9.1l6.67,10.77-5.82-6.41-3.94-1.59-6.69-7.78-7.44,11.32L323.47,33l-8.62,.18-8.62,3.21-6.64,5.24l1.17,8.57-4.08,1.98-9.71,12.33-2.44,6.64l7.57,5.76-1.08,5.64-10.27,7.16-10.62,6.87-.39,5.34l6.32,5.43l12,3.37-5.64,.68-7.36,3.97l4.87,7.66l3.25,3.75l6.84-.86l7.49-.47l5.95,.85l7.52,6.69-.03,4.63l3.57,4.18l3.38,10.91l2.23,6.74l1.71,3.52-3.13,8.51l2.34,2.19l2.79-1.24l2.51,3l4.82,5.43-5.72-2.25-2.6,.12-1.1,4.48l.19,5.55l3.44,2.6l2.52-1.13l1.53-1.19l3.2-2.87-.59,6.26-1.11,3.26-4.22,2.85-2.77,8.66l1.87,2.53-1.01,5.17l3.88,6.27l.38,5.89l1.42,4.16l4.86,7.67l1.87,5.8l2.72,3.18l5.61,.03l4.14,4.63l3.95-.34l1.44-5.57l1.26-4.85-1.13-4.71l4.57-4.95l1.42-4.17l.04-4.56l2.4-4.12l4.03-1.58l3.73-1.68l1.94-.28l6.03-4.89l3.9-7.63l2.9-2.87l3.09-.03l8.21-2.62l7.62-6.13l7.52-7.03-3.87-.45-7.39-.35l3.26-4.41-.96-5.87l3.47,4.98l2.16,3.26l5-1.62-1.06-6.96-3.67-5.48-3.79-2.29l1.44-2.49l5.55,3.83-.04-4.13-3.51-6.48l3.91-.03l3.95-1.52l.92-3.51-3.25-4.14l6.23-.74L417.3,137l3-1.02l-.66-9.63-5.17-6.3l4.61-3.88l4.38-.51-3.37-8.33L420,92.07l2.26-9.6l3.28-11.51-6.49-.79l8.96-2.87l1.58-3.89l11.43-12.67L439.45,42.64zM166.31,106.56l.93-3.99-3.95-2.12-4.09,1.39-2.27,4.26l4.16,4.21L166.31,106.56zM45.62,263.79l-1.5,.8-2.55,1.86l.43,2.42l1.43,1.32l2.8-1.95l2.43-2.47-1.19-1.63L45.62,263.79zM105.85,283.09l-2.69,.38-1.32-.62-.17,1.52l.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,.01-2.44-3.7L105.85,283.09zM128.95,308.23l-1.16-2.34-2.8-1.77-1.39-2.05-.95-1.5-2.64-.46-1.72-.67-2.94-.96-.24,1.02l1.08,2.38l2.89,.78l.5,1.23l2.51,1.5l.84,1.51l4.6,1.92L128.95,308.23zM305.76,317.43l1.81,1.46-3.47,2.62-6.21,2.35-2.78,1.58-3.13,2.79-2.13-.28-.11-3.29l4.87-3.26-4.49,.13-3.12,.48l.48,1.29-2.99,1.9-2.88,1.34-2.96,1.15-1.48,2.28-.48,.86-.03,2.01l.93,1.99l1.16,.09-.29-1.37l.84,.84-.22,1.07-1.89,.61-1.35-.07-2.07,.65-1.22,.19-1.63,.18-2.34,1.07l4.12-.7l.83,.7-3.93,1.11-1.79,.01l.08-.45-.85,1.02l.83,.17-.61,2.62-2.04,2.78-.21-.92-.62-.19-.92-.9l.58,1.94l.7,.64l.04,1.35-.9,1.38-1.58,2.81-.26-.14l.87-2.4-1.43-1.36-.33-2.97-.54,1.55l.6,2.26-1.85-.56l1.93,1.14l.12,3.35l.8,.24l.29,1.21l.39,3.46-1.78,2.53-2.9,1.01-1.84,1.98-1.4,.22-1.42,1.23-.4,1.12-3.08,2.16-1.58,1.57-1.3,1.94-.43,2.31l.5,2.25l.94,2.75l1.25,2.25l.02,1.37l1.33,3.65-.09,2.1-.12,1.21-.7,1.89-.84,.39-1.38-.37-.44-1.35-1.07-.71-1.49-2.68-1.3-2.4-.42-1.23l.58-2.1-.79-1.75-2.19-2.68-1.09-.49-2.83,1.46-.5-.16-1.36-1.5-1.76-.8-3.17,.41-2.49-.36-2.14,.22-1.16,.5l.5,.86-.05,1.3l.6,.63-.53,.42-1.04-.47-1.05,.61-2.03-.1-2.09-1.69-2.45,.4-2.04-.74-1.74,.23-2.36,.75-2.55,2.37-2.79,1.37-1.53,1.51-.65,1.42-.03,2.16l.14,1.5l.5,1.01l.02,0-.01,.02l.02,.03-.03,0-1.07,2.66-.49,2.21-.21,4.08-.27,1.47l.49,1.64l.87,1.47l.56,2.31l1.86,2.21l.65,1.69l1.1,1.45l2.98,.79l1.16,1.22l2.46-.82l2.13-.29l2.1-.53l1.77-.51l1.78-1.2l.67-1.73l.23-2.49l.49-.87l1.89-.79l2.97-.69l2.48,.1l1.7-.25l.67,.63-.09,1.44-1.51,1.77-.66,1.81l.51,.51-.42,1.28-.7,2.29-.71-.75-.59,.05l.01,.43l.53,.01-.04,.8-.46,1.27l.25,.45-.29,1.05l.17,.27-.32,1.47-.55,.78-.51,.09-.56,1l.92,.53l.24-.44l.82,.37l.29,.12l.62-.51l.8-.04l.26,.23l.44-.14l1.3,.26l1.3-.08l.9-.32l.33-.32l.89,.15l.67,.2l.73-.07l.56-.25l1.28,.4l.45,.06l.85,.54l.81,.65l1.02,.44l.74,.8-.24,.28-.14,.64l.28,1.05-.64,.98-.3,1.15-.1,1.27l.16,.73l.07,1.29-.43,.28-.26,1.22l.19,.75-.58,.73l.14,.76l.42,.47l.72,1.54l1.08,1.14l1.32,1.21l1,1.01-.06,.6l1.12,.12l.27-.23l.77,.7l1.38-.21l1.19-.71l1.7-.57l.96-.84l1.55,.16-.11,.28l1.57,.1l1.25,.49l.91,.84l1.06,.78-.34,.42l.65,1.65-.53,.84-.91-.2-.36,1.36-.93-.81-.6-1.52l.69-.75-.71-.19-.52-.93-1.4-.78-1.23,.18-.56,.98-1.14,.7-.61,.1-.27,.59l1.33,1.52-.76,.36-.41,.42-1.3,.14-.49-1.68-.36,.48-.93-.16-.56-1.14-1.15-.18-.73-.33h-1.2l-.09,.61-.32-.42-1.52-.63-.57-.59l.32-.49-.1-.62-.78-.68-1.1-.55-.97-.36-.18-.83-.74-.51l.18,.83-.56,.67-.64-.78-.9-.28-.38-.57l.02-.86l.37-.9-.79-.4l.64-.54-.97-.9-1.31-1.15-.62-.96-1.18-.89-1.41-1.29l.31-.44l.47,.43l.21-.21-.48-.89-.86-.25-.31,.67-1.62-.04-1.01-.27-1.16-.57-1.56-.18-.79-.62-1.44-.5-1.75-.05-1.28-.57-1.51-1.18-3.17-3.11-1.45-.94-2.29-.76-1.56,.21-2.26,1.09-1.41,.29-1.98-.76-2.1-.56-2.62-1.33-2.1-.41-3.18-1.35-2.34-1.4-.71-.78-1.57-.17-2.87-.93-1.17-1.34-3.01-1.67-1.4-1.87-.67-1.45l.93-.29-.29-.85l.65-.77l.01-1.04-.94-1.34-.26-1.2-.94-1.52-2.47-3.02-2.82-2.39-1.36-1.91-2.41-1.26-.51-.76l.43-1.92-1.43-.73-1.66-1.52-.7-2.19-1.51-.26-1.62-1.66-1.32-1.55-.12-1-1.51-2.42-.99-2.48l.04-1.25-2.03-1.29-.93,.14-1.6-.9-.45,1.33l.46,1.56l.27,2.43l.97,1.33l2.08,2.21l.46,.75l.43,.22l.36,1.1l.5-.05l.57,2.04l.85,.8l.59,1.11l1.77,1.6l.93,2.89l.83,1.35l.78,1.44l.15,1.62l1.35,.1l1.13,1.39l1.02,1.36-.07,.54-1.18,1.11-.5-.01L166,396.2l-1.83-1.73-2.02-1.48-1.44-.78l.09-2.25-.42-1.68-1.34-.96-1.93-1.39-.37,.4-.7-.82-1.73-.75-1.65-1.83l.2-.24l1.15,.18l1.04-1.18l.11-1.43-2.16-2.27-1.64-.89-1.04-2.01-1.04-2.12-1.3-2.61-1.13-2.92-.02,0-.47-1.7-1.82-1.92-1.31-.4-.31-.96-1.57-.17-1-.91-2.6-.33-.71-.55-.34-1.87-2.72-3.45-2.34-4.85l.1-.82-1.24-1.17-2.17-2.99-.39-2.95-1.49-1.99l.61-3.05-.1-3.2-.9-2.9l1.1-3.61l.34-3.54l.34-3.59-.51-5.42-.89-3.53-.82-1.94l.34-.82l4.05,1.42l1.49,3.91l.69-1.09-.45-3.41-.95-3.47-.38-.01-5.43-4.23-2-1.89-5.08-1.82-1.56-3.96l.4-2.79-3.59-1.96-.49-3.76-3.39-3.45-.06-2.48-1.54-1.83-2.47-1.57-.79-4.36-3.61-4.13-1.51-4.94-2.69-.34-4.46-.13-3.29-1.54-5.8-5.64-2.68-1.05-4.9-1.99-3.88,.48-5.51-2.59-3.33-2.43-3.11,1.21l.58,3.93-1.55,.36-3.24,1.16-2.47,1.86-3.11,1.16-.4-3.24l1.26-5.53l2.98-1.77-.77-1.46-3.57,3.22-1.91,3.77-4.04,3.95l2.05,2.65-2.65,3.85-3.01,2.21-2.81,1.59-.69,2.29-4.38,2.63-.89,2.36-3.28,2.13-1.92-.38-2.62,1.38-2.85,1.67-2.33,1.63-4.81,1.38-.44-.81l3.07-2.27l2.74-1.51l2.99-2.71l3.48-.56l1.38-2.06l3.89-3.05l.63-1.03l2.07-1.83l.48-4l1.43-3.17-3.23,1.64-.9-.93-1.52,1.95-1.83-2.73-.76,1.94-1.05-2.7-2.8,2.17h-1.72l-.24-3.23l.51-2.02-1.81-1.98-3.65,1.07-2.37-2.63-1.92-1.36-.01-3.25-2.16-2.48l1.08-3.41l2.29-3.37l1-3.15l2.27-.45l1.92,.99l2.26-3.01l2.04,.54l2.14-1.96-.52-2.92-1.57-1.16l2.08-2.52-1.72,.07-2.98,1.43-.85,1.43-2.21-1.43-3.97,.73-4.11-1.56-1.18-2.65-3.55-3.91l3.94-2.87l6.25-3.41h2.31l-.38,3.48l5.92-.27-2.28-4.34-3.45-2.72-1.99-3.64-2.69-3.17-3.85-2.38l1.57-4.03l4.97-.25l3.54-3.58l.67-3.92l2.86-3.91l2.73-.95l5.31-3.76l2.58,.57l4.31-4.61l4.24,1.83l2.03,3.87l1.25-1.65l4.74,.51-.17,1.95l4.29,1.43l2.86-.84l5.91,2.64l5.39,.78l2.16,1.07l3.73-1.34l4.25,2.46l3.05,1.13l5.23,1.94l4.41,3.8l2.92,.72l2.46-3.28l3.4-2.5l4.17,.98l4.2-3.55l4.59-2.05l1.93,3.39l2.09-1.9l.63-3.91l1.94,.89l4.74,7.32l3.73-5.5l.38,6.15l3.44-1.31l1.06-2.36l3.4,.47l4.29,3.37l6.56,2.89l3.86,1.32l2.75-.5l3.78,3.9-3.94,3.74l5.07,1.59l7.57-.87l2.39-1.3l2.99,4.42l3.05-3.72-2.86-3.19l1.81-2.61l3.41-.35l2.24-.77l2.26,1.84l2.82,4.11l3.13-.6l4.95,3.35l4.35-1.17l4.09,.18-.32-4.67l2.49-1.33l4.34,2.58-.02,7l1.78-5.88l2.26,.2l1.27-7.71-3-4.91-3.27-3.29l.22-9.34l3.32-6.43l3.7,1.44l2.84,3.91l3.81,9.59-2.49,4.01l5.21,1.63-.01,7.99l3.75-6.09l3.35,5.02-.84,5.61l2.71,4.95l2.93-5.3l2.04-6.56l.15-8.71l3.98,.62l4.14,1.19l3.76,3.95l.17,3.87-2.09,4.06l1.98,3.98-.36,3.54-5.49,4.96-3.9,1.08-2.9-2.11-.84,3.5-2.7,5.73-.82,2.9-3.25,4.39-4.01,.42-2.21,2.68-.19,4.05-3.26,.77-3.43,4.9-3.04,6.6-1.09,4.48-.15,6.41l4.12,.9l1.26,4.99l1.31,3.95l3.92-1.02l5.21,2.23l2.8,1.94l2.01,2.38l3.51,1.37l2.97,2.08l4.63,.28l3.05,.47-.46,4.19l.87,4.76l2.03,5.17l4.17,4.28l2.16-1.46l1.52-4.68-1.46-7.4-1.98-2.53l4.49-2.28l3.18-3.46l1.55-3.5-.23-3.42-1.9-4.44-3.41-4.02l3.31-5.75-1.22-5.12-.94-9.18l1.95-1.4l4.81,1.65l2.88,.58l2.32-1.58l2.61,2.04l3.45,3.44l.85,2.27l5,.44-.08,4.8l.93,6.99l2.56,.85l2.03,3.16l4.06-2.97l2.68-6.05l1.86-2.61l2.18,4.98l3.65,6.89l3.1,6.26-1.13,3.2l3.73,2.83l2.52,2.82l4.47,1.26l1.8,1.55l1.11,4.05l2.18,.63l1.13,1.77l.2,5.19-2.04,1.71-2.01,1.58-4.62,1.59-3.53,3.62-4.74,.71-6-.92-4.21-.03-2.9,.3-2.35,3.11-3.57,1.9-4.04,5.57-3.23,3.8l2.38-.67l4.5-5.45l5.88-3.53l4.19-.43l2.48,2.09-2.65,2.83l.89,4.46l.92,3.07l3.64,2.01l4.63-.58l2.81-4.56L305.76,317.43zM199.86,184.43l-1.96,3.54-2.47,2.49l3.83,3.54l2.28-.85l3.78,2.36l1.74-2.73-1.71-3.03-.84-1.53-1.68-1.46L199.86,184.43zM239.75,238.48l.61,1.63l1.98,.14l3.28-3.34l.06-1.19-3.85-.06L239.75,238.48zM251.91,243.37l1.1-3.12-.71-1.23-1.15-.13-1.08,1.8-.13,.41l.74,1.77L251.91,243.37zM202.94,154.49l-.73-2.88-5,1.26-3.34-2.11-3.32,4.8l3.09,6.28-5.72-1.17-.06,3.01l6.97,7.05l1.94,3.38l2.7,.73l4.6-3.41l.5-8.21-4.24-4.07L202.94,154.49zM192.12,185.41l-5.06-3.93-4.71-4.21-.87-6.18-1.76-8.92-3.14-3.84-2.79-1.55-2.47,1.42l1.99,9.59-1.41,3.73-2.29-8.98-2.56-3.11-3.17,4.81-3.9-4.76-6.24,2.87l1.4-4.46-2.87-1.87-7.51,5.84-1.95,3.71-2.35,6.77l4.9,2.32l4.33-.12-6.5,3.46l1.48,3.13l3.98,.17l5.99-.67l5.42,1.96-3.66,1.44-3.95-.37-4.33,1.41-1.87,.87l3.45,6.35l2.49-.88l3.83,2.15l1.52,3.65l4.99-.73l7.1-1.16l5.26-2.65l3.26-.48l4.82,2.12l5.07,1.22l.94-2.86-1.79-3.05l4.6-.64L192.12,185.41zM250.65,230.6l-2-2.11-2.06,.5-.25-3.06-3.21-2.04-3.07-2.27-1.63-1.75L237,220.9l-.52-2.96-2.03-.55-.96,6.13-.36,5.11-2.44,3.14l3.8-.6l.96,3.65l3.99-3.23l2.78-3.38l1.57,2.86l4.36,1.51L250.65,230.6zM222.35,51.34l2.34,7.29l4.96,5.88l9.81-1.09l6.31,1.97-4.38,6.05-2.21-1.78-7.66-.71l1.19,8.31l3.96,6.04-.8,5.2-4.97,3.46-2.27,5.47l4.55,2.65l3.82,8.55-7.5-5.7-1.71,.94l1.38,9.38-5.18,2.83l.35,5.85l5.3,.63l4.17,1.44l8.24-1.84l7.33,3.27l7.49-7.19-.06-3.02-4.79,.48-.39-2.84l3.92-3.83l1.33-5.15l4.33-3.83l2.66-4.76-2.32-7.1l1.94-2.65-3.86-1.89l8.49-1.63l1.79-3.15l5.78-2.6l4.8-13.47l4.57-4.94l6.62-11.12-6.1,.1l2.54-4.3l6.78-3.99l6.84-8.9l.12-5.73-5.13-6.04-6.02-2.93-7.49-1.82-6.07-1.49-6.07-1.5-8.1,3.98-1.49-2.53-8.57,.98-5.03,2.57-3.7,3.65-2.13,11.74L239,24.52l-3.48-1.14-4.12,7.97-5.5,3.35-3.27,.66-4.17,3.84l.61,6.65L222.35,51.34zM167.77,94.21l-3.65-2.9-1.5-.66-2.88,4.28-.05,2l4.66,.01L167.77,94.21zM284.83,184.6l-2.44-3.35-6.77-3.35-2.92-5.55-5.21,1.99-.36-3.86-3.86-4.32-6.22-4.71-2.65,3.71-5.55,2.66l.42-6.06-4.81-10.05-7.11,4.06-2.59,7.7-2.21-5.92l2.06-6.37-7.24,2.65-2.88,3.99-2.15,8.42l.89,9.05l3.98,.04-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08-1.04l1.5-2.42l2.21,2.79l2.47,.46l2.97,4.96-1.8,1.98l5.68,2.63l4.29,3.68l1.08,2.55l.77,3.24-3.63,6.93-.98,3.44l.94,2.42-5.77,.86-5.27,.12-1.85,4.87l2.37,2.23l8.11-1.03-.04-1.89l4.08,3.15l4.18,3.28-.98,1.77l3.4,3.02l6.02,3.53l7.6,2.39-.46-2.09-2.92-3.67-3.96-5.37l7.03,5l3.54,1.66l.97-4.44-1.82-6.3-1.16-1.73-3.81-3.03-2.95-3.91l.35-3.94l3.63-.87l4.41,6.6l3.45,2.85l4.92-7.87l.87-4.93-4.41-.47-4.03-6.7-4.45-1.64-6.6-4.97l5.15-3.63L284.83,184.6zM264.36,205.36l.32-1.01-.03-3.17-2.19-2.08-2.57,1.05-1.19,4.17l.7,3.56l3.14-.36L264.36,205.36zM182.25,154.98l-2.13-2.17-3.76,.4-.95,1.38l4.37,6.75L182.25,154.98zM195.4,139.8l4.62-1.11l1.28-8.25-.09-5.95-2.14-5.56-.22,1.6-3.94-.7-4.22,4.09-3.02-.37l.18,8.92l4.6-.87-.06,6.47L195.4,139.8zM248.49,155.83l3.08,5.1l.81,.57l3.07-1.27l3.02,.2l2.98,.28-.25-2.64-4.84-5.38-6.42-1.08-1.35,.67L248.49,155.83zM200.13,101.41l2.28,3.12l4.15-2.77l.76-4.97-3.35-4.92-1.63-.96-3.63-.58l.22,5.9L200.13,101.41zM183.06,93.13l-2.71,4.19l6.24,.52l4.61,4.44l4.58,1.5-1.09-5.68-2.14-6.73-7.58-5.35-5.5-2.04l.2,5.69L183.06,93.13zM208.96,82.89l5.13-.12-2.22,4-.04,5.3l3.01,5.76l5.81,1.77l4.96-.99l5.18-10.73l3.85-4.45-3.38-4.97-2.21-10.65-4.6-3.19-4.72-3.68-3.58-9.56-6.52,.94l1.23,4.15-2.87,1.25-1.94,5.32-1.94,7.46l1.78,7.26L208.96,82.89zM210.94,168.15l3.01-6.93l3.34-1.85l4.19-8.74-5.36-2.47-5.84-.36-2.78,2.77-1.47,4.23-.04,4.82l1.75,8.19L210.94,168.15zM212.14,108.88l.33-1.49-1.97-2.45-5.65-.19l.75,3.68l5.25,.83L212.14,108.88zM211.25,143.05l1.53-4.14-1.02-3.46-2.45-3.92-4.03,3.02-1.49,4.92l3.4,2.79L211.25,143.05zM228.09,145.15l5.76-.18l8.04-1.61l3.59,1.28l4.18-2.26l1.75-2.84-.63-4.52-3-4.23-4.56-.8-5.71,.97-4.46,2.44-4.09-.94-3.78-.5-1.78-2.7-3.22-2.61l.64-4.43-2.42-3.98-5.52,.03-3.11-3.99-5.78-.8-1.06,5.1l3.25,3.74l5.8,1.45l2.81,5.09l.34,5.6l.97,5.99l7.45,3.42L228.09,145.15z'/>
    		<path fill="#F78D23" id='asia' d='M835.21,465.56l-1.16-1.47l.43-1.69l1.45,.27l.15-2.43-.26-1.14-1.66-.24-.2-1.52-.93,1.01-.56,2.23l.83,3.56l1.13,1.76L835.21,465.56zM829.05,473.44l1.94,.51l1.05-.93-.7-.92-2.84,.13L829.05,473.44zM819.98,432.89l-.31,1.76-.7,.79-.58,.76l1.73,1.95l.88-.84l.88-1.79l1.01-.93l.27-2.71-2.08,2.74l.45-1.91L819.98,432.89zM817,430.02l.43,1.35-.2,1.45l.1,1.32l1.78-.85l1.3-1.2l.05-1.19h-1.78L817,430.02zM814.05,427.7l1.2,1.42l.74-2.47-.97-1.03-2.4-.1L814.05,427.7zM830.35,486.86l-1.96,.1-2.41,.63-.33,.67-2.77,1.12-1.21,1.72-.25,.96l.34,.34l2.4-.62l1.83-2.11l2.35-.81l2.92-1.23l1.03-.76-1.06-.35L830.35,486.86zM815,398.14l1.69-4.88l.49-1.85-1.28-.92-2.24,2.33-1.65,3l.32,2.25l1.48,2.55L815,398.14zM827.14,429.25l-.77-1.06-2.69-.06l1.71,2.18l.04,1.08-1.65-.23l.44,1.72l.84,.15l.12,1.99l1.33-.63-.69-1.75-.06-.95l2.16,.75L827.14,429.25zM821.49,439.08l-1.53,1.06-1.77,.79-1.1,2.37l.46,.82l2.08-1.57l1.32,.11l.88-1.17l1.78,1.33-.86,1.33l.79,2.03l3.3,1.63l.8-1.31-.9-2.06l1.31-1.42l1.02,2.86l.96-2.57-.17-1.58-.29-1.87-.2-1.04-.24-1.42-2.27-1.34l.17,2.18-1.98,.08-.46,1.26-2.13,.77L821.49,439.08zM868.65,337.12l-1.18,2.33l.48,4.1-1.76,4.38-1.59,1.38-4.11,3.51-1.87-1.67-2.93,6.17-3-.7-5.58,1.02-2.06,2.33-2.82,1.75-1.47,2.11-2.65,1.03l1.14,2.28l1.77,.96-.69,2.96l1.36,1.27l1.81-1.37l1.87-5.61-2.84-2.46l3.28-.06l3.32-1.59l4.88-.75l.12,2.52l1.88,1.29l4-3.84l4.93-.21l3.58-1.6l1.46-2.42-.49-1.73l1.06-2.78-.05-3.64l2.59-3.6l.08-2.94-1.53-5.11L868.65,337.12zM872.26,293.25l1.64,4.41-.12,5.85-.65,3.24l.32,4.54-.31,4.01l.52,3.4l1.84-3.13l2.13,2.44l.08-2.84-2.73-4.23l1.72-6.11l4.15,1.41-2.82-7.68-1.16-4.51l.07-4.5-.97-4.5-.73-3.15-1.25,.67l1.11,2.21-2.59,2.17L872.26,293.25zM837.99,471.19l-3.46,.12-.67,1.53l1.94,.1l1.58-.18l2.34,.23l2.37,1.15-1.02-2.13L837.99,471.19zM647.68,391.17l-5.27-.93-3.06-.71-3.16-.41-1.2-3.81-1.34-.56-2.16,.56-2.82,1.51-3.43-1.03-2.83-2.41-2.7-.9-1.87-3.01-2.07-4.27-1.51,.52-1.78-1.07-1.05,1.26-1.66-.15l.58,1.41-.25,.73l.9,2.41l1.1,2.73l1.38,.71l.48,1.11l1.91,1.31l.17,1.29-.28,1.03l.36,1.04l.8,.87l.38,1.01l.42,.75-.19-2.24l.76-1.62l.76-.34l.85,.97l.05,1.81-.61,1.81l.53,1.17l.5-.15l.11,.84l2.19-.48l2.32,.08l1.69,.09l1.92-2.07l2.1-1.98l1.77-1.9l.81-1.06l.35,.27-.26,1.28L633,389.2l.38,2.44l1.26,2.09l1.56,1.11l2.06,.4l1.66,.55l1.27,1.74l.75,1.01l1.01,.38-.01,.67-1.02,1.8-.45,.84-1.18,.95-1.05,2.05-1.27-.16-.58,.71-.45,1.5l.34,1.98-.26,.36-1.29-.01-1.75,1.1-.27,1.43-.65,.62-1.74-.02-1.1,.73l.02,1.18-1.36,.81-1.55-.27-1.87,.98-1.3,.16-2.03,.79-.54,1.28-.07,.99-2.79,1.22-4.48,1.35-2.51,2.03-1.23,.15-.84-.17-1.64,1.2-1.79,.55-2.35,.15-.71,.16-.61,.75-.74,.21-.43,.73-1.39-.06-.9,.38-1.94-.14-.73-1.67l.08-1.57-.45-.85-.55-2.12-.81-1.19l.56-.14-.29-1.32l.34-.56-.12-1.26-.36-1.24-.85-.88-.22-1.17-1.44-1.04-1.5-2.46-.79-2.41-1.94-2.04-1.25-.48-1.86-2.85-.32-2.08l.12-1.79-1.61-3.36-1.31-1.19-1.52-.63-.92-1.76l.15-.69-.78-1.6-.82-.69-1.09-2.32-1.71-2.52-1.43-2.16-1.39,.01l.43-1.74l.13-1.11l.34-1.28-.09-.46-1.84-5.55l.81-1.08-.19-.19l.74-1.53l.57-2.5l.4-.84l.08-.03l1-2.73l1.39-2.38l.06-.12-.26-2.61l.68-1.41l.75-.75l.75-.76l.16-1.94l.91,.68l3.09-.97l1.49,.65l2.31-.01l3.22-1.31l1.52,.06l3.19-.54l1.2-.55l3.26,.46l.99,.89l1.34-.59-1.53-2.83l.54-1.09-.87-4.12l1.92-1.03l.44,1.37l1.42,1.66l1.92,.47l1.02-.1l3.31-2.66l1.05-.27l.82,1.07-.96,1.78l1.75,1.86l.69-.17l.89,2.61l2.66,.73l1.95,1.76l3.98,.6l4.38-.92l.27-.82l.08-.02-.52-2.48l.41-3.73-2.19-1.22l.72-2.48-1.86-.21l.62-3.09l2.64,.91l2.46-1.18-2.04-2.23-.8-2.14-2.26,.96-.29,2.73-.88-2.42-.16-.92l.69-1.57-.54-1.32-3.25-1.3-1.27-3.46-1.55-.99-.09-1.28l2.73,.37l.11-2.88l2.38-.65l2.45,.59l.5-3.91-.5-2.51-2.81,.2-2.38-1-3.25,1.8-2.62,.85-1.42-.66l.28-2.1-1.79-2.76-2.08,.12-2.38-2.84l1.62-3.21-.82-.87l2.24-4.77l2.88,2.53l.35-3.19l5.79-4.85l4.38-.12l6.18,3.1l3.32,1.79l2.98-1.87l4.44-.09l3.59,2.29l.81-1.31l3.94,.19l.7-2.11-4.54-3.1l.37-.3-.3-.11-.8-1.88-1.88-.67-.09-2.65l1.13-2.2l1.33-1.39-.71-1.75-1.89-1.07-1.84,1.12-1.9,1.5-1.81-2.32-1.2-1.83-1.3-2.44l3.08-.37l2.57-.64l1.66-2.67-.31-2.15-2.11-1.76l.56-2.42l2.17-2.73l1.78-3.54l1.77-5l1.34-8.84l1.89-19.97l5.23-4.07l4.82-5.44l3.93-3.13l3.76-3.86l2.03-4.04-.92-7.34l1.6,1.39l1.88-3.97-2.85-4.11-.08-1.68-3.38-.78l.92-3.83-1.5-6.49-.08-2.74l5.17-7.99l1.84-8.42l2.08-1.88l7.42,2.51l.58,5.18-2.66,7.28l1.74,2.78l.9,5.94-.64,11.07l3.09,4.73-1.2,5.01-5.49,10.2l3.21,1.02l1.12-2.51l3.08-1.82l.74-3.55l2.43-3.49-1.63-4.26l1.31-5.08-3.07-.64-.67-4.42l2.24-8.28-3.64-7.03l5.02-6.04-.65-6.62l1.4-.22l1.47,5.19-1.11,8.67l3,1.59-1.28-6.37l4.69-3.58l5.82-.49l5.18,5.18-2.49-7.62-.28-10.28l4.88-2.02l6.74,.44l6.08-1.32-2.28-5.38l3.25-7.02l3.22-.3l5.45-5.51l7.4-1.51l.94-3.15l7.36-1.08l2.29,2.61l6.29-6.24l5.15,.2l.77-5.24l2.68-5.33l6.62-5.31l4.81,4.21-3.82,3.13l6.35,1.92l.76,6.03l2.56-2.94l8.2,.16l6.32,5.84l2.25,4.35-.7,5.85-3.1,3.24-7.37,5.92-2.11,3.08l3.48,1.43l4.15,2.55l2.52-1.91l1.43,6.39l1.23-2.56l4.48-1.57l9,1.65l.68,4.58l11.72,1.43l.16-7.47l5.95,1.74l4.48-.05l4.53,5.14l1.29,6.04-1.66,3.84l3.52,6.98l4.41,3.49l2.71-9.18l4.5,4l4.78-2.38l5.43,2.72l2.07-2.47l4.59,1.24-2.02-8.4l3.7-4.07l25.32,6.06l2.39,5.35l7.34,6.65l11.32-1.62l5.58,1.41l2.33,3.5-.34,6.02l3.45,2.29l3.75-1.64l4.97-.21l5.29,1.57l5.31-.89l4.88,6.99l3.47-2.48-2.27-5.07l1.25-3.62l8.95,2.29l5.83-.49l8.06,3.84l3.92,3.44l6.87,5.86l7.35,7.34-.24,4.44l1.89,1.74-.65-5.15l7.61,1.07l5.67,6.59-2.78,2.97-4.6,.7-.07,6.46-1.12,1.35-2.63-.19-2.14-2.26-3.73-1.92-.63-2.89-2.85-1.1-3.19,.87-1.52-2.37l.61-2.55-3.36,1.64l1.26,3.19-1.59,2.83-.02,.04-3.6,2.89-3.63-.48l2.53,3.44l1.67,5.2l1.29,1.67l.33,2.53-.72,1.6-5.23-1.32-7.84,4.51-2.49,.69-4.29,4.1-4.07,3.5-1.03,2.55-4.01-3.9-7.31,4.42-1.28-2.08-2.7,2.39-3.75-.76-.9,3.63-3.36,5.22l.1,2.14l3.19,1.17-.38,7.46-2.6,.19-1.2,4.15l1.17,2.1-4.9,2.47-.97,5.4-4.18,1.14-.84,4.66-4.04,4.18-1.04-3.08-1.2-6.69-1.56-10.65l1.35-6.95l2.37-3.07l.15-2.44l4.36-1.18l5.01-6.78l4.83-5.73l5.04-4.57l2.25-8.37-3.41,.51-1.68,4.92-7.11,6.36-2.3-7.14-7.24,2-7.02,9.56l2.32,3.38-6.26,1.42-4.33,.56l.2-3.95-4.36-.84-3.47,2.7-8.57-.94-9.22,1.62-9.08,10.33-10.75,11.78l4.42,.61l1.38,3l2.72,1.05l1.79-2.38l3.08,.31l4.05,5.19l.09,3.92-2.19,4.51-.24,5.27-1.26,6.85-4.23,6.01-.94,2.82-3.81,4.66-3.78,4.53-1.81,2.28-3.74,2.25-1.77,.05-1.76-1.86-3.76,2.79-.44,1.26-1.07-.23-1.22,1.28-.84,1.27l.11,2.67-1.45,.82-.5,.65-1.06,1.08-1.87,.6-1.22,.98-.09,1.57-.33,.4l1.12,.58l1.59,1.57l2.42,4.18l.69,2.27l.02,3.99-1.06,1.88-2.54,.65-2.24,1.41-2.53,.29-.31-1.85l.52-2.57-1.24-3.6l2.08-.59-1.92-3-1.36-.67-.34,.66-.82,.29-.1-.67-.73-.32-.75-.57l.77-1.57l.66-.42-.25-.65l.71-1.94-.18-.59-1.64-.39-1.32-.98-3.92,1.06-2.06,1.69-3.02,.98l1.49-1.67-.59-1.41l2.22-2.45-1.48-1.93-2.44,1.3-3.17,2.54-1.73,2.34-2.75,.17-1.43,1.68l1.48,2.41l2.29,.58l.09,1.58l2.22,1.02l3.14-2.51l2.49,1.37l1.81,.09l.46,1.84-3.97,.97-1.31,1.87-2.73,1.73-1.44,2.39l3.02,1.86l1.1,3.31l1.71,3.05l1.9,2.53-.05,2.43-1.76,.89l.67,1.73l1.65,1-.43,2.61-.71,2.52-1.57,.28-2.05,3.41-2.27,4.09-2.6,3.68-3.86,2.82-3.9,2.55-3.16,.35-1.71,1.34-.97-.98-1.59,1.5-3.92,1.5-2.97,.46-.96,3.15-1.55,.17-.74-2.16l.66-1.16-3.76-.96-1.33,.49-3.74,2.56-2.34,2.81-.62,2.05l2.14,3.1l2.62,3.81l2.54,1.79l1.7,2.32l1.28,5.32-.38,5.02-2.34,1.87-3.21,1.83-2.29,2.36-3.5,2.63-1.02-1.81l.79-1.91-2.08-1.61-2.35-.41-1.14-1.48-1.42-2.94-2.52-1.31-2.4,.05l.41-2.25-2.47,.02-.22,3.14-1.51,4.15-.91,2.5l.19,2.04l1.83,.09l1.14,2.57l.5,2.43l1.56,1.61l1.7,.33l1.45,1.46l.64,.26l1.66,1.69l1.18,1.87l.16,1.88-.3,1.27l.27,.96l.21,1.65l.99,.77l1.1,2.46-.05,.94-1.99,.19-2.65-2.06-3.32-2.21-.33-1.42-1.62-1.87-.39-2.31-1.01-1.52l.31-2.04-.62-1.19-1.11-1.08-.48-1.39-1.49-1.59-1.36-1.33-.46,1.65-.53-1.56l.31-1.76l.83-2.71-.27-2.1l.86-2.17-.94-1.68l.23-3.11-1.14-1.48-.91-3.44-.51-3.65-1.21-2.41-1.85,1.46-3.19,2.07-1.57-.26-1.74-.68l.97-3.6-.58-2.74-2.2-3.39l.34-1.07-1.64-.38-1.99-2.42-.8-1.56-.16-1.53-.53-1.45-1.17-1.76-2.58-.12l.25,1.25-.88,1.67-1.19-.61-.41,.55-.79-.33-1.08-.27-.4,1.1-1.91-.04-3.46,.62l.16,2.25-1.5,1.76-4.04,1.99-3.14,3.47-2.11,1.85-2.79,1.91v1.34-1.4,.72-2.53,1.04-1.31,.15-.84,2.21l.58,3.74l.15,2.38-1.19,2.71-.01,4.83-1.45,.14-1.28,2.16l.85,.93-2.56,.8-.94,1.92-1.13,.81-2.65-2.63-1.3-3.96-1.08-2.86-.98-1.35-1.49-2.74-.7-3.58-.48-1.8-2.55-3.97-1.16-5.65-.84-3.76l.01-3.59-.54-2.79-4.08,1.79-1.98-.36-3.66-3.63l1.35-1.09-.83-1.19-3.29-2.58-2.05-.77-.84-2.2-2.17-2.34-5.17,.58-4.56,.06-3.95,.43zM880.73,326.62l-1.97-.83-2.15-1.31-3.29-4.12-.83,3.09-.82,5.38-3,.21-1.39,2.94l.39,3.74l3.12-.06l1.53-4.12l4.41,2.58l2.46-3.76l4.16-1.05-.62-4.35L880.73,326.62zM870.6,470.63l-3.01-.53-2.08-1-2.4-.97h-2.49l-3.22,1.68-2.34,2.96-2.9-1.67-.78-4.51-.44-1.04-4.5-1.14-1.44,.91-3.78,.67l1.19,1.38l2.5,.51l1.11,1.66l4.1,.01l.24,.74-2-.05-3.02,1l2.14,1.37l.01,1.21l.64,1.02l1.08-.25l.83-1.36l4.21,2.58l2.31,.23l5.44,2.37l1.35,2.35l.73,3.05-1.77,.78-1.19,2.29l3.55-.09l.69-.8l2.85,.57l2.5,2.31-.05-9.16L870.6,470.63zM811.49,419.94l.42,1.26l1.38,1.65l.36-1.04l.84,.67-.88,.73-.14,1.19l1.4,.63l2.55-.42l1.79,1.72l.72-1.05l1.04,1.5l2.18,1.4l.29-1.32-.92-.69l.27-1.56-3.5-1.59-1.24,.34-1.49-.32-.63-2.29l.44-2.33l1.65-.96l.74-2.42-.96-2.09l.46-1.22-.25-.75-.86,.76-1.73-.84h-1.7l-.91,2.66-.29,4.55-1.13-.96L811.49,419.94zM848.95,364.89l1.44-.78l1.15,1.07l1.58-2.03-.36-1.15-2.06-.73-1.15,1.42-1.59-.39-1.55,2-.02,1.58l1.83,.95L848.95,364.89zM851.78,479.52l-.5,1.01l.27,2.11l1.44-1.91l.01-1.34-.64-.82L851.78,479.52zM769.87,98.34l.83-5.72-7.11-8.34-2.11-.98-2.3,1.7-5.12,18.6L769.87,98.34zM736.89,82.07l4.65,5.73l7.81,4.2l6.12-1.8l.69-13.62-6.46-16.04-5.45-9.02-6.07,4.11-7.28,11.83l3.83,3.27L736.89,82.07zM701.91,437.46l-1.94-1.57-1.27,4.58l.5,4.04l1.33,2.23l2.44-.64l1.18-.8l.42-2.92-1.36-2.93L701.91,437.46zM870.07,151.56l-2.66,3.92l.49,.52l5.75,1.08l4.25-.07-.34-2.57-3.98-3.81L870.07,151.56zM869.51,140.34l10.33,.3l2.21-8.14-10.13-6.07-7.4-.51-3.7,2.18-1.51,7.75l5.55,7.01L869.51,140.34zM979.95,178.65l3.66-.52l2.89-2.06l.24-1.19-4.06-2.51-2.38-.02-.36,.37-3.57,3.64l.5,2.73L979.95,178.65zM894.64,142.03l3.24-4.25-7.04-2.88-5.23-1.68-.67,3.59l5.21,4.27L894.64,142.03zM772.06,475.39l.7-3.47-1.36-1.76-2.06-.25-.98-1.56-.48-1.94-1.01-.07-1.61-.97l1.12-2.27-2.13-1.27-1.62-2.33-2.36-1.91-2.85-.04-2.66-3-1.55-1.16-2.17-1.89-2.48-2.73-4.34-.54-1.81-.11l.25,1.42l2.92,3.08l2.11,1.56l1.47,2.39l2.53,1.75l1.03,2.17l.82,2.39l2.46,2.32l2.13,3.9l1.39,2.09l2.12,2.27l1.2,1.69l3.6,2.28l2.36,2.34l3.1-.06L772.06,475.39zM808.57,486.53l-1.73,.23-1.01-.75-.75,1-1.54,.02-.96,1.62l1.51,.02l1.94-.38l3.24-.57L808.57,486.53zM811.44,489.58l-2.61,.56l3.72,1.98l1.18-.05l.17-.76-.98-.86L811.44,489.58zM808.99,435.38l1.85-1.56-.5-2.31-1.47,2.82-1.68,1.96-2.03,1.74-1.38,1.97l3.73-2.67L808.99,435.38zM814.34,467.31l-2.51-2.48l.4-2.11l2.45-.4l4.67-.14l2.7,.54l2.11-.54l2.25-2.76-.49-.62-2.77,2.02-3.22,.12-3.54-.39-2.19-.82-2.38,2.07-.59,1.15-1.41,4.2-.4,2.21-1.16,1.83l.87,1.91l1.18,.02l.43,2.69-.8,2.57l1.2,.82l1.78-.41-.11-4-.24-3.25l1.87-.85-.21,2.72l2.02,1.64-.36,1.08l.7,.77l2.75-1.08-1.36,2.29l1.1,.98l1.5-.82l.02-1.84-2.52-3.22l.51-.96-2.65-3.57l2.47-1.08l1.22-1.63l1.22,.4l.23-1.28-5.23,.95L814.34,467.31zM815.48,487.25l-1.76-.84-2.23,.59l.01,1.03l3.73,.35l4.21-.8l.41-1.56-2.51,1.03L815.48,487.25zM804.64,463.1l.94-1.9l3.32-.33-3.14-2.58l.48-1.28-2.06-2.64l1.59-2.52l2.06-.95-.5-1.36l1.88-.14l.2-1.1-2.34-.84-1.85-.78-.13-1.22-1.44-1.42-1.13,.01-1.41,2.19-2.16,1.95-2.39,1.53-1.11,1.05-1.38,1.77-2.01,2.21-3.36,.6-1.2,.53-.56,2.36-2.17,.52-2.05-.96-1.67,1.85-.33,2.58l.39,2.44l1.35,2.38l1.4,.77l.43,3.74l2.31,.32l1.84-.15l1.02,1.35l3.33-1l1.4,.89l2,.16l1.11,1.71l3.19-1.26l.41,.99l1.08-4.27l.07-2.78l2.7-1.91L804.64,463.1zM785.28,408.7l1.23-1.3l-.63-1.13-1.61-.07-3.06,.83-1.38,1.34l.08,2.53l2.3,.91l2.42-1.41L785.28,408.7zM792.03,484.6l-1.02-1.82-5.2-1.35-.62,1.16-5.37-.28-.38-1-1.16-.21-2.26-1.09-3.4-.17-1.92,2.68l2.57,.21l.49,1.21l5.11,1.16l1.17-.35l2.06,.28l3.25,1.07l2.62,.51l2.91,.21l2.54-.08l3.08,1.13l3.2-1.07-3.44-1.67L792.03,484.6z'/>
    		<path fill="#F78D23" id='europe' d='M533.37,106.83l1.94-3.42-1.69-4.34l5.81-2.78l1.11,5.18l4.05,3.03-6.26,5.36L533.37,106.83zM531.04,75.59l.5,4.32l8.27,2.56l8.13-1.81l4.16-8.52-5.5-5.8-7.09-4.26-2.84,5.09-4.07-4.08-8.66,4.72l3.07,7.48L531.04,75.59zM512.18,102.19l4.2,3.86-2.54,4.62l6.03,7.64l3.38-.48l1.33-10.51l2.46-2.49l1.56-10.09l7.06-5.66-9.23-11.29-3.54-5.57-4.12,.56-1.06,5.43-3.99,.22-1.54-5.56-7.64,5.69l2.18,11.79L512.18,102.19zM434.57,212.43l-4.65-.5-4.57,3.71-3.53-1.96-4.26,3.75-4.37-4.68-4.25,1.03-1.89,4.47l5.88,1.57l.12,1.96-4.96,1.28l6.1,3.2-2.76,2.84l7.82,2.01l3.69,.93l2.42-1.15l8.09-4.38l3.65-5.01-3.17-4.6L434.57,212.43zM459.59,277.32l1.51-2.34l.92,1.37-1.02,2.2l.67,1.32l3.4,.85l.04,.07l1.88,2.95-.41,2.74l0,0-4.17-.42-.53,3.06l1.54,2.48-2.93,1.41l.79,1.8l4.38,.75h0.02-2.51,.97-4.11,4.64l1.49,.87l1.97-1.67l2.59,.5l1.85-2.06l1.31,.87l4.77-1.21l3.75,.04l2.52-2.33-1.12-2.33l1.43-1.33l.34-2.93-3.4-.88-.8-1.84-1.73-5.41-1.92-.77-2.5-5.79-.22-.52-2.9-.32l2.52-4.53l.73-4.22-3.07-.03-2.86,.72l3-5.73-3.38,.45-2.24-.42-2.18,4.31-1.02,5.36l1.42,2.59L459.59,277.32zM605.64,69.03l3.04,3.88l3.28-2.69l.39-2.72l2.52-1.27l3.76-2.23l1.08-2.62-4.16-3.85-2.64,2.9-1.61,4.12-.57-4.65-4.26,.21L601,63.25l6.24,.52L605.64,69.03zM622.39,166.28l-2.87,1.96l.41,4.83l5.08,2.35l.74,3.82l9.16,1.1l1.66-.74-5.36-7.11-.57-7.52l4.39-9.14l4.18-9.82l8.71-10.17l8.56-5.34l9.93-5.74l1.88-3.71-1.95-4.83-5.46,1.6-4.8,4.49-9.33,2.22-9.26,7.41-6.27,5.85l.76,4.87-6.71,9.03l2.58,1.22-5.56,8.27L622.39,166.28zM516.64,348.19l-2.86,.39-3.28-.32-.39,1.82l3.91,1.79l1.43,.38l2.14,1.31l.59-1.79-.42-1.09l1.01-2.78L516.64,348.19zM569.65,357.85l-2.02-.05-.41,.82-.2,.02-1.33,.13l.66,1.37l1.37,.44l2.87-1.38-.09-.27-.2-.64l1.89-1.46L569.65,357.85zM547.51,357.92l-2.09-.24-2.18,.2-1.53-1.16-.52,1.46l3.42,.67-.03,.56l4.04-.29l.35-1.01-1.53,.41L547.51,357.92zM451.25,294.45l4.97-2.68l2.12-4.12l-.46-3.36l1.5-3.29-3.01-3.01-2.35,.2-2.12,2.27-3.81,3.75l1.46,4.77-2.27,4.78L451.25,294.45zM657.19,191.76l-3.88-2.49-8.28-2.44-1.46,2.66l2.94,4.58-3.19,5.09-3.2-4.62-4.16,3.19-5.25,.21-2.01,2.58-3.48-.78l2.76-4.64-2.11-.38-9.79,6.54-5.86,3.52-.69,4.61-4.33,1.54-2.2-2.43-.02-4.04l3.55-.91-1.6-4.18-7.84-2.44l2.06,4.69-1.37,4.41l2.34,4.28-1.63,4.81-2.62-2.43-2.59-.4-6.53,6.74l1.89,4.88-2.36,1.59-6.78-4.1-1.78,2.51l1.69,2.8-.36,3.11-2.19-1.66-3.61-1.97-.18-6.75-.18-3.15-4.57-5.1l2.06-.9l12.52,5.31l4.58-1.85l3.11-3.69-.19-4.8-2.15-3.51-10.59-8.65-7.68-1.88-4.61-4.86-2.89,2.81-3.07-5.11l3.61-2.23-8.77-6.24-5.03,1.72-5.11-.38-4.27,6.99-4.61-.44-6.15,3.59-7.71,9.89-4.7,5.67-6.74,13.76-5.13,9.3-5.54,6.59-7.4,5.18-2.58,3.88l.89,13.26l1,5.86l3.88,2.71l3.74-1.24l5.54-6.27l1.88,3.35l2.13,7.5l2.35,5.81l.89,4.71l3.25-.23l1.59-3.95l3.4,.49l1.59-4.76l1.07-8.84l2.92-1.27l2.58-6.23-2.68-3.14-2-4.07l2.04-8.41l5.41-5.34l4.46-5.14-.44-4.02l2.72-4.69l4.82-1.94l3.9,3.23l.29,2.84-1.87,1.39-6.41,7.02-2.54,3.94-1.34,3.58l1.36,5.41-.62,5.73l2.72,1.87l1.62,3.07l4.56-1.18l4.93-2.07l5.09-.45l2.94,2.68-3.19,3.07-2.89,.16-3.04-.91-3.53,.8-3.55,1.53l.24,3.11l1.78,1.9l1.03-.67-.33,3.12-.54,3.99-2.25,.1-2.23-3.88-2.64,1.78-1.38,3.24-.1,3.81l.6,4.16-3.87,1.58-.64,2.13-2.7-.06-.21-1.18-2.8-.82-3.53,1.64-4.38,2.22-1.92,1.39-1.32-1.51-3.17-1.89-1.58,1.31-2.85,.9l.03-1.7-2.83-1.12-.05-1.88-.76-2.39l2.02-3.59l.83,.55l.69-1.9-1.52-.77-.34-1.43l.83-1.68l.1-2.68-2.26,1.47-.98,1.43-2.47,.32-.8,1.54-.47,1.38l.08,5.12l1.14,2.72l.13,2.74l.64,1.79-1.9,2.33-.52-1.04-2.34,.26-.55,1-2.33-.13-3.84,1.96-2.46,6.74-1.44,1.23-2.25,.88-2.45,.9-.84,3.61-6.53,3.37-2.65-1.85l.89,4.84-4.71-1.09-3.64,.92l.28,3.07l4.29,1.6l2.07,2.09l2.89,4.26-.53,7.88-1.45,2.32-4.53-.13-2.33,.2-2.98-.66-3.76,.02-3.43-.7-3.97,2.77l1.15,1.65-.14,2.69l.12,1.26l.56,1.34l.06,1.57-.58,2.21-.2,1.47-1.12,1.32-.22,2.35l.67,1.35l1.25,.33l.26,2.18-.43,2.75l1.45-.38l1.48,.49l1.13-.91l2.62,.54l.79,2l1.04,1.17l1.37,.29l1.07-1.31l1.76-1.23l2.67,.07l3.56-.05l1.99-2.69l2.12-.7l.61-2.3l1.62-1.59-1.09-2.05l1.08-2.96l1.72-2.03l.25-1.24l3.59-.78l2.66-2.49-.15-2.19l.32-2.29l4.08-1.24l5.53,1.04l2.54-2.17l1.17-.28l1.62-1.8l1.29-.53l2.28,1.29l1.4,.45l.87,3.8l1.91,2.19l2.56,2.45l2.19,1.68l2.07,.24l1.21,1.49l1.8,.67l.83,1.58l1.16,.46l.86,1.83l1.09,2.09-.61,.77-.57,1.91-.01,1.08l1.17-.27l1.5-3.06l1.17-.21l.33-1.88-2.03-1.34l1.18-2.36l2.44,.6l1.56,1.7l.52-1.31-.29-.68-2.4-1.92-2.06-1.12-2.51-1.35l.79-.74-.68-.83-2.2,.02-3.12-3.05-1.41-3.17-2.63-1.95-.92-1.99l.34-1.12-.16-1.97l2.28-1.42l2.23,.58-.62,.36-.1,.06-.06,1.38l.83,1.32l.86-1.71l1.8,.63l.05,1.33l1.28,1.65-.57,.29l2.36,2.85l2.56,1.14l1.63,1.38l2.64,1.41l0,0l1.21,.75l.79,1.23l.59,.29l.47,.59-.38,1.16-.24,2.53l.24,1.75l1.55,1.23l.06,.8l.48,.25l.19,1.03l1.44,2.05l1.09,1.64l.49,2.36l1.05,2.81l2.3,1.51l1.86-.04-1.06-3.08l1.78-.37-.83-1.8l2.59,.94-.04-2-1.39-1.03-1.56-1.65l1.06-.79-1.4-1.7-.63-2.18l.53-.8l1.48,1.88h1.56l1.42-.59-1.94-2.06l3.4-.96l1.46,.35l1.71,.1-.04,.76l.88,1.71l2.34-1.98l1.2-1.14l3.33-.2l.51-.91-2.45-1.2-.33-1.44-.9-2.15l1.02-2.73l1.46-1.6l.78-4.71l.85,.37l1.36-.85-.06-1.02l2.17-2.96l1.04-2.23l2.6-.5l.19,1.51l4.36,1.02l.81,.92-2.68,1.33-.5,.76l3.06,1.16-.62,1.85l1.56,.8l3.81-2.27l3.07-.69l.55-1.42-2.86,.24-1.37-.96-.16-2.5l2.42-1.51l2.63-.21l1.87-1.32l2.24-.33l2.52-.66l.07,.9-4.13,1.67l1.57,1.6-2.33,3.35-2.04,.64l2.42,2.32l3.2,1.48l3.57,3.27l1.03,1.18l1.55,.44l1.62,1.4l.7,2.58-.42,1.6-3.31,1.94-2.41-.33-3.27,.57-4.02-1.43-4.89-2.64-4.64,.08-3.27,1.06-3.37,2.42-5.34-.49-1.18,2.81-4.32,.15-3.11,3.48l1.78,1.72-1.36,2.78l2.05,1.96l1.66,3.48l3.06-.06l2.71,1.85l1.94-.41l.65-1.44l3.02,.12l2.27,1.86l4.26-.39l1.93-2l2.35,.8l1.71-.3-1.06,1.3l1.03,1.57l.75-.76l.75-.76l.15-1.94l.92,.68l3.09-.97l1.49,.66l2.31-.01l3.23-1.31l1.51,.06l3.19-.54l1.2-.55l3.26,.45l.98,.89l1.34-.59-1.53-2.82l.55-1.1-.88-4.11l1.92-1.03l.44,1.37l1.42,1.66l1.92,.48l1.02-.11l3.31-2.66l1.05-.27l.83,1.06-.97,1.78l1.75,1.87l.7-.18-.08-1.77l1.03-.84l.48-1.26l.49-2.82l2.31-.29-.86-.99-1.31-.17-1.43-2.62-1.47-1.97-3.06-4.46l.28-2.59-2.55-3.7l2.79-4.09l2.72-.66l1.28-2.39-1.42-.66l.28-2.1-1.79-2.76-2.08,.12-2.38-2.84l1.62-3.21-.82-.87l2.24-4.77l2.88,2.53l.35-3.19l5.79-4.85l4.38-.12l6.18,3.1l3.32,1.79l2.98-1.87l4.45-.09l3.59,2.29l.81-1.31l3.94,.19l.7-2.11-4.54-3.1l.37-.3-.3-.11-.8-1.88-1.88-.67-.09-2.65l1.13-2.2l1.33-1.39-.71-1.75-1.89-1.07-1.84,1.12-1.9,1.5-1.81-2.32-1.2-1.83-1.3-2.44l3.08-.37l2.57-.64l1.66-2.67-.31-2.15-2.11-1.76l.56-2.42l2.17-2.73l1.78-3.54l1.77-5l1.34-8.84l1.89-19.97l5.23-4.07l4.82-5.44l3.93-3.13l3.76-3.86l2.03-4.04-.92-7.34L657.19,191.76zM499.67,338.21l-1.54-.19l.64,2.1l.11,4.38l1.06,.95l1.14-1.2l1.27,.23l.39-4.81-1.68-2.62L499.67,338.21zM501.13,336.43l.93-2.89-.48-3.25-1.81,1.45-.57,1.41l.65,2.53L501.13,336.43zM509.15,279.81l1.68-3.97-.9-2.5-4.11,1.66l.39,2.05L509.15,279.81z'/>
    		<path fill="#F78D23" id='australia_and_oceania' d='M944.1,508.23l1.76,1.67-.92,.38-.94-1.27L944.1,508.23zM942.92,507.59l.58-.16l.75,.36-.46-2.33-1.34-.89l.06,2.21L942.92,507.59zM670.34,620.36l-1.81-1.34-.19,.87-.41,1.76l.07,2.29l4.3-.28l.79-1.96-.1-.81L670.34,620.36zM924.89,489.69l-1.85-.44-.18,1.12l.59,.44l1.72,.29l1.09-.06-.46-.74L924.89,489.69zM914.18,481.81l-.14,.47l1.15,1.15l1.23,.64l.56-.16-1.12-.92L914.18,481.81zM923.52,486.69l-.66-.89-2.3-1.29-1.29-.67-.42,.29l1.05,.94l1.54,1.01l2.2,1.19L923.52,486.69zM929.25,492.65l-1.67-.69l1.07,1.74l1.96,.02-.78-.97L929.25,492.65zM928.16,490.77l.42-.52-1.12-1.35-1.01-2.25h-.95l.58,1.68L928.16,490.77zM870.69,488.89l2.9,.12l1.57,.47l2.2-.97-.36-2.08l1.71-.93l2.38-.8l3.66,1.23l1.46,2.46l1.59,1.55l2.18,1.8l2.83,.43l2.41,.32l.69,.73l1.86-.2l.31-.82-2.98-1.19l.84-.53-2.17-.48l.11-1.25-1.61,.09-1.82-2.99-2.5-1.84-.62-1.87l2.58-.3-.68-1.49-4.67-1.73-.43-1.65-1.56-1.41-1.93-1.43-5.18-1.6-4.87-1.92l.05,9.1L870.69,488.89zM895.02,481.01h1.49l1.44-.66l1.53-.68l.44-.79l1.47-.23l.94-1.71l.06-1.55-.57-.46-1.68,.05l.31,1.65-1.57,1-.79,.96-1.6,.21-.27-1.49-.4,.07-.42,1.34-1.53,.22-2.51-.41-.23,.87l1.6,.78L895.02,481.01zM901.31,473.03l1.27,.91l.65,1.08l.53,1.65l.88-.74-.34-1.45-1.07-.89-1.12-1.17-1.18-.67-.95-.61-1.51-.78-.78,.67l2.02,.82L901.31,473.03zM910.03,478.91l-.85-.63-.3-.83-.39,.27l.6,2.13l1.23,1.78l1.21,1.08l.79-.28l.39-.79-1.32-.95L910.03,478.91zM963.01,588.66l-1.99,1.5-.64-1.53-.62-1.57-1.97,1.7-.42,2.07-1.06,.95-1.25,2.81-1.68,1.98-2.4,2.01-2.01,1.47-1.81,.73-3.53,3.87-1.51,2.96l.47,1.48l3.05,.28l1.82,1.34l2.58,.09l1.4-1.16l2.2-1.8l1.59-4.03l.75-2.57l2.4-1.46l2.16-.05-1.03-1.86l1.43-1.54l1.83-2.8l1.04-1.74v-1.57L963.01,588.66zM972.77,577.93l-1.89-.28-2.26-1.15-.42-2.65-1.27-.95-.06,2.38-2.03-3.67-.79-3.06-2.18-.89-1.53-1.89-1.04,.27l1.17,2.41l2.21,3.04l1.34,1.43-.08,.61l1.14,2.34l.13,2.28-.47,2.74-2.03,1.25-.08,1.31l3.02,1.45l.92,2.01-1.62,3.04l1.17,.54l.48,.98l2.17-1.49l1.39-2.53l1.06-1.97l.41-.68-.26-1.56l.75-1.1l2.14,.07l.85-2.09l.68-3.15-1.42-.41L972.77,577.93zM943.83,526.72l-1.46-1.38-2.3-1.86-.9-.84-1.23-1.01-1.57-1.01-1.21-.04l.39,1.01l1.86,2.1l1.81,1.59l2.01,1.35l1.54,.81L943.83,526.72zM979.95,508.74l-1.64,.91-.89,.16-1.4,.6l.36,1.09l1.79-.61l1.78-.72l.23-.16l.35-1.4L979.95,508.74zM974.69,512.92l-1.27-.36-1.08,1l.27,1.29l1.55,.36l1.74-.4l.46-1.53-.96-.84L974.69,512.92zM889.35,588.22l-2.19,.71-1.53,.51-2.71-1.28-1.83-.33-.07,1.7l1.62,3.25l.38,2.5l1.73,3.28l1.72,.12l.58,.21l1.95-2.67l.98,1.05l.29-3.06l.96-1.3-.2-4.43L889.35,588.22zM904.7,540.45l-.07-1.77-.79-2.49-2.19-2.49-1.3-1.17-1.99-1.87-.48-3.21-.69,.46-1.14-1.31-1.12,.66-1.09-3.25-1.6-1.87l.37-.72-1.88-1.29-1.98-1.41-3.04-1.54-.91-1.99l.27-1.52-.76-2.5-.71-.35-.43-1.45-.6-2.48l.29-1.28-1.35-1.13-.93-1.22-1.8,1.08-1.01-2.25l.1-1.04-.21-1.62-1.02-1.45-.12-1.2-.7-.34-.19-1.78-.79-1.39-1.04,1.06-.07,.81-.53,1.56-.68,1.51l.44,.95-.54,.58-.37,2.16l.32,1.64-.2,.84l.39,1.39-.85,2.3-.35,1.59-.57,1.29-.55,1.57-1.85,1-2.68-.99-.43-.9-1.47-.75h-.79l-2.03-1.72-1.44-1-2.16-.93-2.23-1.6-.2-.81l1-1.41l.82-1.43-.33-1.15l.96-.1l1.06-1.16l.75-1.53-1.29-1.41-.66,.55-1.05-.25-1.64,.82-1.74-.88-.8,.29-2.36-.73-1.49-1.17-1.86-.7-1.49,.41l2.05,.94l.05,1.45-2.36,.54-1.43-.34-1.7,1.01-1.22,1.63l.44,.71-1.26,.75-1.34,2.3l.59,1.58-1.78-.27-1.75-.02-1.56-1.71-2.07-1.32-1.36,.39-1.23,.41-.05,.72-1.23-.34-.04,.8-1.41,.49-.68,1.14-1.53,1.42-.34,2.21-1.24-.63-.88,1.41l1,1.38-1.19,.58-1.18-2.51-1.96,2.47-.07,1.59-.13,1.17-1.64,1.49-.72,1.58-1.52,1.31-2.95,.87-1.55-.07-.74,.27-.42,.65-1.7,.33-2.21,1.11-.77-.37-1.27,.23-2.14,1.1-1.37,1.28-2.28,1-1.18,2.07-.21-2.29-1.16,2.17l.3,1.77-.38,1.52-.57,.75-.3,1.77l.65,.92l.27,.97l1.39,2.43l.05,1.59-.83-1.2-1.39-.9l.95,2.88-1.23-1.35l.39,1.33l1.6,2.48l.35,2.47l1.24,1.26l.07,.93l1.12,2.08-.12,1.83l.46,1.85l1.48,3.29l.31,1.95-.34,2.3l.1,1.2-.48,.76-1.39,.46-.06,1.93l1.51,.64l2.97,2.17h1.88l2.05,.13l1.35-1.08l1.41-.96l.82,.15l1.67-1.8l1.92-.15l2.02-.37l2.48,.61l1.76-.3l2.38-.08l1.04-1.36l.54-1.75l2.43-.77l2.97-1.7l2.68,.22l3.19-1.1l3.63-1.18l5.02-.31l2.7,1.6l1.97,.09l3.6,2-.53,.77l1.48,1.25l1.75,2.43-.09,1.79l2.19,1.4l1.07-2.69l1.75-1.15l2.28-2.85l.22,2.47-1.08,1.65-.42,1.95-1.47,1.88l2.5-.63l1.37-2.35l.68,2.52-.92,1.66l2.7,.41l1.38,1.4l.65,1.75l.52,2.66l1.81,2.18l2.71,1.03l1.6,.25l1.59,.56l2.42,.97l2.46-2.58l1.53-.67-.44,1.85l1.72,.63l2.32,1.58l1.69-1.54l1.29-1.38l2.59-1.45l3.14-.13l1.61-1.22-.14-1.11l.36-2.4l.71-2.58l1.08-1.71l.83-2.93l.94-1.67l1.02-2.59l2.08-1.63l1.24-3l.55-2.34-.06-1.86l.76-2.87l.49-1.48l.16-2.81-1.34-2.68L904.7,540.45z'/>
    		<path fill="#F78D23" id='africa' d='M618.63,430.43l-.06-.79-1.06,.01-1.33,.97-1.49,.29-1.29,.42-.9,.06-1.6,.1-1,.52-1.39,.19-2.47,.88-3.05,.34-2.64,.73-1.39-.01-1.26-1.19-.55-1.17-.91-.52-1.2-.78l1.6-.68l.09-1.18-.66-.88-1.38-.86-.88-.98-1.52-1.65-1.56-1.64-3.83-2.72-1.54-1.41-.77-2.67-1.63-3.38-1.53-1.08-1.07-.72-1.03-3.52-.41-3.06l.61-.54-.9-2.94-.49-.62-3.27-2.71-.09-1.97l.56-.53-2.52-3.39-.9-1.74-1.04-1.69-2.12-4.87-1.72-3.18-1.16-3.37l.29-.29l2,4.58l1.27,1.41l.93,1.02l.65-.55l.76-1.65l.6-2.4l.79-1.29-1.84-5.56-1.38,.82-2.19-.18-2.25-.77-.65,1.06-.76-1.62-1.99-.41-2.47,.27-1.15,.94-2.16,1.03-1.3-.51-2.78-.96-2.7-.86-3.73,.05-.68-1.08-2.79-.39-.89-.56-1.04-.01-.96-1.48-3.79-.68-1.93,.45-2.02,1.55-.88,1.6l.65,2.5-1.34,1.49-1.37,.84-2.99-1.61-3.95-1.36-2.52-.63-1.31-2.92-3.72-1.48-2.34-.55-1.18,.29-3.29-1.15-1.07-.52-.71-1.59-1.45-.06-.53-1.84l1.85-1.7l.37-2.96-.97-.86l.02-1.6l1.4-1.71-.2-.67-2.38,1.29l.08-1.77-1.96-.42-3.05,1.41-1.92,.21-1.14-.81-3,.03-2.64,1.38-1.41-.52-4.64,.28-4.75,.62-2.7,1.06-1.77,1.43-3.03,.6-2.7,1.87-1.22-.04-2.9-.75-2.67,.24-1.69-1.46-2.06-.02-.88,2.1-1.87,3.51-2.08,1.39L451,365.1l-1.8,2.25-.38,1.74-1.07,2.82l.7,4.03-2.34,2.68-1.41,.85-2.21,2.17-2.61,.35-1.41,1.21-.05,.04-1.78,3.2-1.87,1.14-1.01,1.92-.07,1.64-.74,1.79-.94,.49-1.56,1.94-.96,2.14l.18,1.02-.92,1.57-1.08,.82-.13,1.39-.12,1.26l1.48,1.29l.72,1.41-.28,1.48l.34,1.47l.31,2.91-.35,2.75-.78,1.44l.24,1.57-.67,1.49-1.36,2.03-1.23,.55l1.4,1.02l1.16,2.24-.36,1.27l.46,2.19l.18,.61l.85,.6-.02,.43l.64,.8l1.18,.19l1.5,1.19l.82,.47l.41,.62l.32,1.25l.7,.56l.72,.37l1.09,1.11l1.23,1.67l.34,2.08l.49,1.03l1.46,1.5l2.02,1.13l.76,.21l1.89,1.81l2.39,1.53l2.55,2.13l2.89,1.33l.73-.02l.54,.07l2.78-1.02l1.95-.81l3.32-.49l1.8-.03l1.96,.55l1.28-.03l2.5,.79l2.53-.81l1.56-.96l4.4-1.64l2.26-.6l2.32-.33h2.47l2.11-.03l1.98,1.85l.92,2.02l1.5,1.75l2.24,.06l1.08-.63l1.06,.15l2.91-1.01-.03,.77l.72,.4l.57,1.25l1.28,.47l1.1,1.84-.41,2.2-.96,3.13l.52,.42-.56,2.06-.68,2.03-.61,.89-.09,.93l1.7,2.88l1.85,2.3l2.88,2.82l2.3,2.96l.75,2.1l.39,.87-.27,.54l1.4,1.77l.57,1.88l.85,2.72-.86,1.12-.15,.59l.69,1.69l.75,1.72l.84,1.01l.15,1.61-.29,2.11-.9,1.27-1.61,1.87-.67,1.17-.91,2.59-.15,1.24-.97,2.65-.39,2.55l.26,1.83l.17,2.24l2.28,2.87l.61,1.85l1.47,3.56l1.45,2.47l1.09,1.24l.36,1.64l.06,3.63l.94,4.72l.69,2.24l.62,3.04l1.1,2.3l2.08,2.39l2.01,4.15v0.01l1.41,2.74l1.84,3.05l.07,2.53-.9,.6l.91,2.23-.02,1.96l.37,.91l.13-.47l1.21,1.51l.95,.06l1.19,1.21l1.28-.08l1.73-1.28l2.39-.54l2.89-1.33l1.16,.18l1.7-.41l3.04,.65l1.39-.64l1.7,.5l.36-.93l1.43-.17l2.93-1.3l2.12-1.51l1.98-1.98l3.17-3.38l1.59-2.33l.78-1.66l1.19-1.63l.55-.46l1.91-1.61l.73-1.43l.33-2.62l.7-2.28l.24-1.64-.72-.21-.24-1.31l1.23-1.14l3.37-1.67l2.31-1.04l1.17-1.09l.42-1.27-.66-.52l.45-1.41l.08-2.96-.5,.15-.04-.9-.55-1.76-1.33-2.26l.24-2.12l1.16-.68l1.96-2.1l1.08-.54l3.17-3.15l3.16-1.42l2.56-1.11l1.79-1.8l1.09-2.01l.84-2.06-.49-1.41-.11-4.48-.35-2.5l.12-2.83-.45-1.27-1.03-.62-1.16-2.79-.98-1.77l.18-1.34-.16-.85l.77-1.7-.08-.73-1.79-1.02-.17-1.59l1.29-3.45l1.13-.92l.55-1.86l.9-1.13l.4-1.96l1.05-.2l.69-1.16l1.96-1.11l.63-.66l.65-1.47l3.07-3.37l2.61-2.12l4.19-2.77l2.81-2.26l3.3-3.81l2.39-3.13l2.41-4.11l1.73-3.59l1.35-3.15l.79-3.06l.59-1.02-.01-1.49L618.63,430.43zM616.06,504.96l.73,1.35-.28,1.39-.5,.85-.95-1.7-.53,.86l.54,2.15-.25,1.23-.77,.67-.18,2.48-1.1,3.43-1.38,4.08-1.73,5.67-1.07,4.21-1.27,3.55-2.28,.73-2.45,1.31-1.61-.79-2.23-1.1-.77-1.62-.19-2.71-.99-2.42-.26-2.17l.5-2.16l1.29-.52l.01-.99l1.34-2.26l.25-1.89-.65-1.4-.53-1.85-.22-2.7l.98-1.63l.38-1.84l1.4-.11l1.56-.59l1.04-.52l1.23-.04l1.6-1.65l2.31-1.78l.84-1.45-.38-1.23l1.19,.34l1.55-1.99l.05-1.72l.93-1.28l.98,1.22l.74,1.21l.69,1.89L616.06,504.96z'/>
        </g>
    </svg>`;
}
let world2 = () => {
    return `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg id="icon-${iconNum}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 209.281 209.281" style="enable-background:new 0 0 209.281 209.281;" xml:space="preserve" width="512px" height="512px">
        <path d="M203.456,139.065c3.768-10.786,5.824-22.369,5.824-34.425s-2.056-23.639-5.824-34.425c-0.092-0.324-0.201-0.64-0.333-0.944  C188.589,28.926,149.932,0,104.641,0S20.692,28.926,6.159,69.271c-0.132,0.305-0.242,0.62-0.333,0.944  c-3.768,10.786-5.824,22.369-5.824,34.425s2.056,23.639,5.824,34.425c0.092,0.324,0.201,0.64,0.333,0.944  c14.534,40.346,53.191,69.271,98.482,69.271s83.948-28.926,98.482-69.271C203.255,139.705,203.364,139.39,203.456,139.065z   M104.641,194.281c-3.985,0-10.41-7.212-15.78-23.324c-2.592-7.775-4.667-16.713-6.179-26.436H126.6  c-1.512,9.723-3.587,18.66-6.178,26.436C115.051,187.069,108.626,194.281,104.641,194.281z M80.862,129.521  c-0.721-7.998-1.102-16.342-1.102-24.881s0.381-16.883,1.102-24.881h47.557c0.721,7.998,1.102,16.342,1.102,24.881  s-0.381,16.883-1.102,24.881H80.862z M15.001,104.641c0-8.63,1.229-16.978,3.516-24.881h47.3  c-0.701,8.163-1.057,16.529-1.057,24.881s0.355,16.718,1.057,24.881h-47.3C16.23,121.618,15.001,113.271,15.001,104.641z   M104.641,15c3.985,0,10.411,7.212,15.781,23.324c2.591,7.775,4.667,16.713,6.178,26.435H82.681  c1.512-9.723,3.587-18.66,6.179-26.435C94.231,22.212,100.656,15,104.641,15z M143.464,79.76h47.3  c2.287,7.903,3.516,16.251,3.516,24.881s-1.229,16.978-3.516,24.881h-47.3c0.701-8.163,1.057-16.529,1.057-24.881  S144.165,87.923,143.464,79.76z M184.903,64.76h-43.16c-2.668-18.397-7.245-34.902-13.666-46.644  C152.972,24.865,173.597,42.096,184.903,64.76z M81.204,18.115C74.783,29.857,70.206,46.362,67.538,64.76h-43.16  C35.685,42.096,56.309,24.865,81.204,18.115z M24.378,144.521h43.16c2.668,18.397,7.245,34.902,13.666,46.645  C56.309,184.416,35.685,167.186,24.378,144.521z M128.077,191.166c6.421-11.742,10.998-28.247,13.666-46.645h43.16  C173.597,167.186,152.972,184.416,128.077,191.166z" fill="#933EC5"/>
        </svg>`;
}
// TODO: FIX
// Imports an SVG on click location
const ImportSVG = (evt) => {

    // var rect = draw.rect(100,100).move(100,100).rotate(10)
    // var rbox = rect.rbox(draw) // or rect.rbox(rect.doc())
    
    // // draw the box
    // draw.rect(rbox.width, rbox.height).move(rbox.x, rbox.y).fill('none').stroke('black')

    // find correct point on canvas
    let point = canvas.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    let converted = point.matrixTransform(canvas.getScreenCTM().inverse());
    iconNum++;
    let svg = `<svg id="icon-${iconNum}">${TrimSVG(world2())}</svg>`;
    draw.svg(svg);
    let icon = SVG.get(`icon-${iconNum}`);
    icon.attr({name: `icon_${iconNum}`,
        fill:"rgb(0,0,0)",
        x:converted.x,
        y:converted.y,
    });
    
    icon.style("overflow","visible");
    let rbox = icon.rbox(icon.doc())
    icon.move(rbox.x,rbox.y);
    AddClickSelectEvent(icon);
    ToggleSelectedObject(icon);
    
    
};

// Trims the SVG Tag from a given string
const TrimSVG = svgString => {
    // Remove all line breaks
    let string = svgString.replace(/\r?\n|\r/g,"");
    // Remove beggining tag regex
    let regex = /(.*?)(<svg(.*?)>)\s*/gmi;
    // Remove ending tag regex
    let regex2 = /\s*<\/svg>.*/gmi;
    let regex3 = /fill="(.*?)"/gmi;
    // Execute regex and replace with nothing
    let string2 = string.replace(regex,"");
    let string3 = string2.replace(regex2,"");
    return string3.replace(regex3,"");
}