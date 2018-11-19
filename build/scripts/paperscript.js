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
    switch(currentTool){
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

// While the user drags the mouse, points are added to the path
// at the position of the mouse:
function onMouseDrag(event) {
    switch(currentTool){
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

// When the mouse is released, we simplify the path:
function onMouseUp(event) {
    switch(currentTool){
        case "land":
            onMouseUpLand(event);
        break;
    }
}

function onMouseMove(event) {
    switch(currentTool){
        case "select":
            // if(!somethingSelected){
            //     project.activeLayer.selected = false;
            //     if (event.item)
            //         event.item.selected = true;
            // }
        break;
        case "land":
        break;
    }
}
var toolPan = new paper.Tool();

function onKeyDown(event) {
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

//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                     SELECT                                                                        //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//
function onMouseDownSelect(event){
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
    window.somethingSelected.fillColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
}
window.setSelectBorderFill = function(color){
    var fillObj = color.toRgb();
    window.somethingSelected.strokeColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
}
window.setSelectTextFill = function(color){
    var fillObj = color.toRgb();
    window.somethingSelected.fillColor = new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a);
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
var btn = document.getElementById('download-svg');
var svg;
var canvas;

function triggerDownload (imgURI) {
  var evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  });

  var a = document.createElement('a');
  a.setAttribute('download', 'MY_COOL_IMAGE.png');
  a.setAttribute('href', imgURI);
  a.setAttribute('target', '_blank');

  a.dispatchEvent(evt);
}
function addClick(el, cb) {
    document.querySelector(el).addEventListener('click', cb);
}
btn.addEventListener("click",function(event){
    var svgsaver = new SvgSaver();
    var octocat = document.querySelector('#SvgjsSvg1006');
    // addClick('#asPng', function() {
    //   svgsaver.asPng(octocat);
    // });
        svgsaver.asSvg(octocat);

    // //get svg element.
    // var svg = document.getElementById("SvgjsSvg1006");

    // //get svg source.
    // var serializer = new XMLSerializer();
    // var source = serializer.serializeToString(svg);

    // //add name spaces.
    // if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
    //     source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    // }
    // if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
    //     source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    // }

    // //add xml declaration
    // source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    // //convert svg source to URI data scheme.
    // var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

    // //set url value to a element's href attribute.
    // var link = document.getElementById("link")
    // link.href = url;
    // link.click();



    //you can download svg file by right click menu.


    // fileName = "map.svg"
    // var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
    // var link = document.createElement("a");
    // link.download = fileName;
    // link.href = url;
    // link.click();
});
document.getElementById("download-png").addEventListener("click",function(event){
    project.activeLayer.selected = false;
    setTimeout(function(){
        var canvasElement = document.getElementById("map-canvas");

        var MIME_TYPE = "image/png";
    
        var imgURL = canvasElement.toDataURL(MIME_TYPE);
    
        var dlLink = document.createElement('a');
        dlLink.download = "map.png";
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    },200);
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


// setInterval(function(){
//     console.log("paper center:",paper.view.center);
//     console.log("paper startingx:",startingX);
//     console.log("paper startingy:",startingY);
//     console.log("paper offsetx:",offsetX);
//     console.log("paper offsety:",offsetY);
// },2000)