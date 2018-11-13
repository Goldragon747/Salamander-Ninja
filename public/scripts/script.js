var draw;

let currentTool = "select";
var currentSVG;
let selectUI = {};
var selectButton, landButton, textButton, forestButton, mountainButton, 
    riverButton, roadButton, landmarkButton, mapButton, selectLandBorderInput;
var textEditor = document.getElementById('text-editor');

window.onload = () => {
    draw = SVG('svgjs-canvas');
    selectButton = document.getElementById("tool-select");
    landButton = document.getElementById("tool-land");
    textButton = document.getElementById("tool-text");
    forestButton = document.getElementById("tool-forest");
    mountainButton = document.getElementById("tool-mountain");
    riverButton = document.getElementById("tool-river");
    roadButton = document.getElementById("tool-road");
    landmarkButton = document.getElementById("tool-landmark");
    mapButton = document.getElementById("tool-map");

    selectButton.addEventListener("click", evt => {
        ToolButtonPreEvents("select",false);
        document.getElementById("map-canvas").style.display = "none";
        selectButton.classList.add("tool-hover");
    });
    
    landButton.addEventListener("click", evt => {
        ToolButtonPreEvents("land");
        landButton.classList.add("tool-hover");
    });
    
    textButton.addEventListener("click", evt => {
        ToolButtonPreEvents("text");
        textButton.classList.add("tool-hover");
    });
    
    forestButton.addEventListener("click", evt => {
        ToolButtonPreEvents("forest");
        forestButton.classList.add("tool-hover");
    });
    
    mountainButton.addEventListener("click", evt => {
        ToolButtonPreEvents("mountain");
        mountainButton.classList.add("tool-hover");
    });
    
    riverButton.addEventListener("click", evt => {
        ToolButtonPreEvents("river");
        riverButton.classList.add("tool-hover");
    });
    
    roadButton.addEventListener("click", evt => {
        ToolButtonPreEvents("road");
        roadButton.classList.add("tool-hover");
    });
    
    mapButton.addEventListener("click", evt => {
        ToolButtonPreEvents("map");
        mapButton.classList.add("tool-hover");
    });
    
    roadButton.addEventListener("click", evt => {
        currentAttributesPane = attributePanes.icon;
        ToolButtonPreEvents("road");
        roadButton.classList.add("tool-hover");
    });

    selectUI = {
        none: document.getElementById("no-select-container"),
        land: document.getElementById("select-land-container"),
        text: document.getElementById("select-text-container"),
    }
}
const RemoveHovers = () => {
    let buttons = [selectButton, landButton, textButton, forestButton, mountainButton, riverButton, roadButton, landmarkButton, mapButton];
    for (let i = 0; i < buttons.length; i++)
        buttons[i].classList.remove("tool-hover");
}



const ToolButtonPreEvents = label => {
    if(editing){
        turnOffEditMode();
    }
    RemoveHovers();
    currentTool = label;
    document.getElementById("map-canvas").style.display = "block";
}
function manualSelectToolOverride(){
    updateSelectTool();
    ToolButtonPreEvents("select");
    selectButton.classList.add("tool-hover");
    document.getElementById("hover-state-changer-input").value = "select";
    document.getElementById("hover-state-changer").click();
    document.getElementById("map-canvas").style.display = "none";
}
var elementId = 0;

const AddToSVGJSCanvas = element => {
    element = element.replace(/[ ]/, ` id="svgjs_element_${++elementId}"`)
    draw.svg(element);
    var newElement = SVG.get(`svgjs_element_${elementId}`);
    newElement.click( e => {
        currentSVG = e.target;
        turnOnEditMode(e.target);
        e.target.remove();
    });
    // var pattern = draw.pattern(20, 20, function(add) {
    //     add.rect(20,20).fill('#f06')
    //     add.rect(10,10)
    //     add.rect(10,10).move(10,10)
    //   })
    // newElement.attr({ fill: pattern })
}



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

// Land Attributes
window.currentLandColor = {r:0,g:0,b:0,a:1};
window.currentLandBorderColor = {r:0,g:0,b:0,a:1};
window.currentLandTexture = {r:0,g:0,b:0,a:1};
window.CurrentLandTextureColor = {r:0,g:0,b:0,a:1};

// Text Attributes
var currentTextColor, currentTextSize, currentTextFont;

updateSelectTool = () => {
    removeSelectToolUI();
    if(currentSVG){
        let element = SVG.get(currentSVG.getAttribute("id"));
        if(somethingSelected.constructor.name === "PointText"){
            selectUI.text.style.display = "block";
            
        } else if(somethingSelected.constructor.name === "Path"){
            selectUI.land.style.display = "block";
            changeSelectLandFillInput(element.attr("fill"));
            changeSelectLandBorderInput(element.attr("stroke"));
            document.getElementById("border-state-changer-input").value = element.attr("stroke-width");
            document.getElementById("border-state-changer").click();
        }
    } else {
        selectUI.none.style.display = "block";
    }
}
removeSelectToolUI = () => {
    let values = Object.values(selectUI);
    for (let i = 0; i < values.length; i++) {
        values[i].style.display = "none";
    }
}