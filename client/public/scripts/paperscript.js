
var path,segment,text,isEditing,startingText;
window.somethingSelected = undefined;
var offsetX = offsetY = 0;
var startingX = startingY = 0;
var movePath = false;
var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};
var canvas = document.getElementById('map-canvas');
var textEditor = document.getElementById('text-editor');
textEditor.onfocus = function() {
    document.execCommand('selectAll',false,null)
};
function onMouseDown(event) {
    if(document.getElementById("map-canvas")){
        switch(window.currentTool){
            case "select":
                onMouseDownSelect(event);
            break;
            case "land":
                onMouseDownLand(event);
            break;
            case "text":
                onMouseDownText(event);
            break;
        }
    }
}

// While the user drags the mouse, points are added to the path
// at the position of the mouse:
function onMouseDrag(event) {
    if(document.getElementById("map-canvas")){
        switch(window.currentTool){
            case "select":
                if (segment) {
                    segment.point += event.delta;
                    if(somethingSelected)
                        somethingSelected.smooth();
                } else if (somethingSelected) {
                    somethingSelected.position += event.delta;
                }
            break;
            case "land":
                path.add(event.point);
            break;
        }
    }
}

// When the mouse is released, we simplify the path:
function onMouseUp(event) {
    if(document.getElementById("map-canvas")){
        switch(window.currentTool){
            case "land":
                onMouseUpLand(event);
            break;
        }
    }
}

function onMouseMove(event) {
    if(document.getElementById("map-canvas")){
        switch(window.currentTool){
            case "select":
            break;
            case "land":
            break;
        }
    }
}
var toolPan = new paper.Tool();

function onKeyDown(event) {
    if(document.getElementById("map-canvas")){
        // UNIVERSAL KEYBOARD SHORTCUTS
    
        //delete
        if(event.key == "delete" || event.key == "backspace"){
            deleteSelectedObject();
            turnOffEditMode();
        }
        switch(currentTool){
            case "select":
                if(event.key == "enter"){
                    if(somethingSelected)
                        updateCanvas();
                }
                if(event.key == "escape"){
                    if(somethingSelected){
                        updateCanvas();
                        somethingSelected.content = startingText;
                    }
                }
            break;
            case "land":
                
            break;
            case "text":
                if(event.key == "enter"){
                    if(somethingSelected)
                        updateCanvas();
                }
                if(event.key == "escape"){
                    if(somethingSelected){
                        updateCanvas();
                        somethingSelected.content = startingText;
                    }
                }
            break;
        }
    }
	
}

//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                     SELECT                                                                        //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
function onMouseDownSelect(event){
    console.log("mousedown")
    if(event.item){
        segment = path = text = null;
        var hitResult = project.hitTest(event.point, hitOptions);
        
        if (event.modifiers.shift) {
            if (hitResult.type == 'segment') {
                hitResult.segment.remove();
            };
            return;
        }
        
        if (hitResult) {
            somethingSelected = hitResult.item;
            if (hitResult.type == 'segment') {
                segment = hitResult.segment;
            } else if (hitResult.type == 'stroke') {
                var location = hitResult.location;
                segment = somethingSelected.insert(location.index + 1, event.point);
                somethingSelected.smooth();
            }
        }
        movePath = hitResult.type == 'fill';
        if (movePath)
            project.activeLayer.addChild(hitResult.item);
    } else {
        turnOffEditMode();
    }
    
}

function deleteSelectedObject(){
    if(somethingSelected){
        somethingSelected.remove();
        somethingSelected = undefined;
    }
}
window.setSelectFill = function(color){
    var fillObj = color.toRgb();
    somethingSelected.fillColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
}
window.setSelectBorderFill = function(color){
    var fillObj = color.toRgb();
    somethingSelected.strokeColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
}
window.setSelectTextFill = function(color){
    var fillObj = color.toRgb();
    somethingSelected.fillColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
    textEditor.style.color = "rgba(" + fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                      LAND                                                                         //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//

function onMouseDownLand(event){
    // If we produced a path before, deselect it:
    if (path) {
        path.selected = false;
    }

    path = new Path({
        segments: [event.point],
        strokeColor: 'black',
        fullySelected: true,
        selected:true
    });
}
var autoselect = true;
// Creates a PaperJS land object and sends it to SVGJS
function onMouseUpLand(event){
    path.simplify(2);
    path.closed = true;
    path.smooth();
    var fillObj = currentLandColor;
    var strokeObj = currentLandBorderColor;
    var strokeWidth = document.getElementById("land-border-size-input").value;
    if( strokeWidth == 0){
        strokeObj.r = 0;
        strokeObj.g = 0;
        strokeObj.b = 0;
        strokeObj.a = 0.00001;
        strokeWidth = 10;
    }
    
    path.style = {
        fillColor: new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a),
        strokeColor: new Color(strokeObj.r/255,strokeObj.g/255,strokeObj.b/255,strokeObj.a),
        strokeWidth: strokeWidth
    }
    somethingSelected = path;
    exportToSVG();
    path.remove();
    if(autoselect){
        manualSelectToolOverride();
    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                      TEXT                                                                         //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
var fontAdjust = function() {
    if(window.draw)
        return 0.70 * window.draw.viewbox().zoom
    else return 0.70;
};
var startInterval;
function onMouseDownText(event){
    var hitResult = project.hitTest(event.point, hitOptions);
            if (hitResult) {
                text = hitResult.item;
                isEditing = true;
            } else {
                if(isEditing){
                    isEditing = false;
                    updateCanvas();
                } else {
                    if (text) {
                        text.selected = false;
                    }
                    isEditing = true;
                    var fillObj = getTextStrokeInput();
                    text = new paper.PointText({
                        point: event.point,
                        content: 'untitled',
                        fillColor: new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a),
                        fontFamily: document.getElementById("font-value").innerHTML,
                        fontSize: document.getElementById("text-size-input").value,
                        selected: false,
                        visible: false,
                        onClick: onTextClick,
                        onMouseEnter: onTextMouseEnter,
                        onMouseLeave: onTextMouseLeave,
                    });
                    if(textEditor.getAttribute("class")){
                        textEditor.removeAttribute("class");
                    }
                    somethingSelected = text;
                    
                    textEditor.style.color = "rgba("+ fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
                    startingText = text.content;
                    
                    textEditor.innerHTML = text.content;
                    textEditor.style.display = "block";
                    textEditor.focus();
                    startInterval = setInterval(function(){
                        var verticalPadding = 1,
                        left = (text.position.x + offsetX) - text.bounds.width / 2,
                        top = (text.position.y  + offsetY) - text.bounds.height / 2 + verticalPadding
                        textEditor.style.top = top + "px";
                        textEditor.style.left = left + "px";
                        textEditor.classList = [];
                        textEditor.classList.add(document.getElementById("font-value").classList[1]);
                        console.log(fontAdjust())
                        textEditor.style.fontSize = document.getElementById("text-size-input").value * fontAdjust() + "pt";  
                        textEditor.style.lineHeight = document.getElementById("text-size-input").value * fontAdjust() + "pt";
                        var fillObj = getTextStrokeInput();
                        textEditor.style.color = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);  
                        somethingSelected.fillColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
                        somethingSelected.fontFamily = document.getElementById("font-value").innerHTML;
                        somethingSelected.fontSize = document.getElementById("text-size-input").value;
                    },1);
                }
            }
}

var onTextMouseEnter = function(){
    if(currentTool == "text")
        canvas.style.cursor = 'text';
    if(currentTool == "select")
        canvas.style.cursor = 'grab';
}

var onTextMouseLeave = function(){
    canvas.style.cursor = 'crosshair';
}
var onTextClick = function(event){
    isEditing = true;
    startingText = somethingSelected.content;
    var verticalPadding = 1,
        left = (somethingSelected.position.x + offsetX) - (somethingSelected.bounds.width/2),
        top = (somethingSelected.position.y + offsetY) - (somethingSelected.bounds.height/2) + verticalPadding 
    textEditor.style.top = top + "px";
    textEditor.style.left = left + "px";
    if(editing){
        fillObj = getSelectTextStrokeInput();
        textEditor.classList.add(document.getElementById("select-font-value").classList[1]);
        textEditor.style.fontSize = somethingSelected.fontSize * fontAdjust() + "pt";
        textEditor.style.lineHeight = somethingSelected.fontSize * fontAdjust() + "pt";
        textEditor.style.color = "rgba("+ fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
    } else {
        fillObj = getTextStrokeInput();
        textEditor.classList.add(document.getElementById("font-value").classList[1]);
        var textsize = document.getElementById("text-size-input").value * fontAdjust() + "pt";
        textEditor.style.fontSize = textsize;
        textEditor.style.lineHeight = textsize;
        textEditor.style.color = "rgba("+ fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
    }
    
    if(textEditor.innerHTML != ""){
        textEditor.innerHTML = somethingSelected.content;
        somethingSelected.visible = false;
        somethingSelected.selected = false;
        paper.view.draw();
        textEditor.style.display = "block";
        textEditor.focus();
    }
}

var updateCanvas = function(){
    clearInterval(startInterval);
    textEditor.style.display = "none";
    if(textEditor.innerHTML && somethingSelected){
        somethingSelected.content = textEditor.innerHTML.replace(/&nbsp;/g," ");
        somethingSelected.visible = true;
        somethingSelected.selected = true;
    }
    paper.view.draw();
    isEditing = false;
    if(!editing && somethingSelected){
        exportToSVG();
        if(autoselect){
            manualSelectToolOverride();
        } else {
            
            somethingSelected.remove();
            somethingSelected = undefined;
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                    DOWNLOAD                                                                       //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
var exportSVG = function(svg,type) {
    // first create a clone of our svg node so we don't mess the original one
    var clone = svg.cloneNode(true);
    // parse the styles
    parseStyles(clone);
    clone.setAttribute("width",1920);
    clone.setAttribute("height",1080);
    // create a doctype
    var svgDocType = document.implementation.createDocumentType('svg', "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd");
    // a fresh svg document
    var svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
    // replace the documentElement with our clone 
    console.log(clone)
    svgDoc.replaceChild(clone, svgDoc.documentElement);
    // get the data
    var svgData = (new XMLSerializer()).serializeToString(svgDoc);
  
    // now you've got your svg data, the following will depend on how you want to download it
    // here I'll use FileSaver.js (https://github.com/yrezgui/FileSaver.js)
    
    var blob = new Blob([svgData.replace(/></g, '>\n\r<')]);
    
    if(type == "svg"){
        saveAs(blob, 'map.svg');
    }else if(type == "png"){
        var img = document.createElement('img');
        img.width = 1920;
        img.height = 1080;
        var can = document.createElement('canvas');
        can.width = 1920;
        can.height = 1080;
        var ctx = can.getContext('2d');
        ctx.drawImage(img,0,0);
        can.toBlob(function(blob) {
            saveAs(blob, "map.png");
        });
    }
    
  };
  
  var parseStyles = function(svg) {
    var styleSheets = [];
    var i;
    // get the stylesheets of the document (ownerDocument in case svg is in <iframe> or <object>)
    var docStyles = svg.ownerDocument.styleSheets;
  
    // transform the live StyleSheetList to an array to avoid endless loop
    for (i = 0; i < docStyles.length; i++) {
      styleSheets.push(docStyles[i]);
    }
  
    if (!styleSheets.length) {
      return;
    }
  
    var defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!defs.parentNode) {
      svg.insertBefore(defs, svg.firstElementChild);
    }
    svg.matches = svg.matches || svg.webkitMatchesSelector || svg.mozMatchesSelector || svg.msMatchesSelector || svg.oMatchesSelector;
  
  
    // iterate through all document's stylesheets
    for (i = 0; i < styleSheets.length; i++) {
      var currentStyle = styleSheets[i]
  
      var rules;
      try {
        rules = currentStyle.cssRules;
      } catch (e) {
        continue;
      }
      // create a new style element
      var style = document.createElement('style');
      // some stylesheets can't be accessed and will throw a security error
      var l = rules && rules.length;
      // iterate through each cssRules of this stylesheet
      for (var j = 0; j < l; j++) {
        // get the selector of this cssRules
        var selector = rules[j].selectorText;
        // probably an external stylesheet we can't access
        if (!selector) {
          continue;
        }
  
        // is it our svg node or one of its children ?
        if ((svg.matches && svg.matches(selector)) || svg.querySelector(selector)) {
  
          var cssText = rules[j].cssText;
          // append it to our <style> node
          style.innerHTML += cssText + '\n';
        }
      }
      // if we got some rules
      if (style.innerHTML) {
        // append the style node to the clone's defs
        defs.appendChild(style);
      }
    }
  
  };
  
document.getElementById('download-svg').addEventListener("click",function(event){
    var svg = document.getElementById("svgjs-canvas").children[0];
    exportSVG(svg,"svg");
});
document.getElementById("download-png").addEventListener("click",function(event){
    var svg = document.getElementById("svgjs-canvas").children[0];
    var width = 1920;
    var height = 1080;
    var data = new XMLSerializer().serializeToString(svg);
    var svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    var url = URL.createObjectURL(svg);
    var img = document.createElement('img');
    img.width = 1920;
    img.height = 1080;
    img.setAttribute('src', url);
    img.addEventListener("load",function(event){
        var can = document.createElement('canvas');
        can.width = 1920;
        can.height = 1080;
        var ctx = can.getContext('2d');
        ctx.drawImage(img,0,0);
        can.toBlob(function(blob) {
            saveAs(blob, "map.png");
        });
    })
    
});

//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                      EDIT                                                                         //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
window.editing = false;
var interval;
window.turnOnEditMode = function(element) {
    if(window.manualOverride){
        svgToSelect.node.parentNode.removeChild(svgToSelect.node);
        svgToSelect = undefined;
        removeSelected();
    }
    document.getElementById("map-canvas").style.display = "block";
    document.getElementById("canvas-overlay").style.display = "block";
    somethingSelected = project.importSVG(element);
    if(somethingSelected.constructor.name === "PointText"){
        somethingSelected.onClick = onTextClick;
    }
    somethingSelected.selected = true;
    editing = true;
    updateSelectTool();
    interval = setInterval(function(){
        if(somethingSelected.constructor.name == "Path"){
            if(document.getElementById("select-land-border-size-input").value != 0){
                somethingSelected.strokeWidth = document.getElementById("select-land-border-size-input").value;
                var colorObj = getSelectLandBorderInput();
                somethingSelected.strokeColor = new Color(colorObj.r/255,colorObj.g/255,colorObj.b/255,colorObj.a);
            } else {
                somethingSelected.strokeWidth = 10;
                somethingSelected.strokeColor = new Color(0,0,0,0.00001);
            }
        } else if(somethingSelected.constructor.name == "PointText"){
            
            somethingSelected.fontFamily = document.getElementById("select-font-value").innerHTML;
            somethingSelected.fontSize = document.getElementById("select-text-size-input").value;
            textEditor.style.fontSize = document.getElementById("select-text-size-input").value * fontAdjust() + "pt";
            textEditor.style.lineHeight = document.getElementById("select-text-size-input").value * fontAdjust() + "pt";
            textEditor.classList = [];
            textEditor.classList = document.getElementById("select-font-value").classList[1];
        }
        
    },1);
}
window.turnOffEditMode = function(){
    if(isEditing){
        updateCanvas();
    }
    if(somethingSelected){
        somethingSelected.selected = false;
        exportToSVG();
    }
    for (var i = 0; i < project.activeLayer.children.length; i++) {
        project.activeLayer.children[i].remove();
    }
    document.getElementById("map-canvas").style.display = "none";
    // document.getElementById("map-canvas").classList.add("ignore-pointer-events");
    document.getElementById("canvas-overlay").style.display = "none";
    editing = false;
    somethingSelected = undefined;
    currentSVG = undefined;
    updateSelectTool();
    clearInterval(interval);
}

window.exportToSVG = function(){
    if(somethingSelected.constructor.name == "Path" && somethingSelected.strokeColor.alpha == 0.00001){
        somethingSelected.strokeColor = "#000"
        somethingSelected.strokeWidth = 0;
    }
    var exportPath = somethingSelected.exportSVG({asString:true});
    AddToSVGJSCanvas(exportPath);
}
window.removeSelected = function(){
    somethingSelected.remove();
    somethingSelected = undefined;
}

window.setViewCenter = function(x,y,canvasWidth,canvasHeight,zoom){
    paper.view.center =  new paper.Point(
        (canvasWidth/2) + x,
        (canvasHeight/2) + y
    );
    project.view.zoom = zoom;
    offsetX = (startingX - paper.view.center.x);
    offsetY = (startingY - paper.view.center.y);
}

window.setInitalOffset = function(){
    var view = paper.view.center;
    startingX = view.x;
    startingY = view.y;
}

