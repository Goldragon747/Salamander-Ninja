var path,segment,text,isEditing,startingText;
window.somethingSelected = undefined;
var offsetX = offsetY = 0;
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
                path.smooth();
            } else if (path) {
                path.position += event.delta;
            } else if (text){
                text.position += event.delta;
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
            
            if(hitResult.item.constructor.name == "PointText"){
                text = hitResult.item;
            } else {
                path = hitResult.item;
                if (hitResult.type == 'segment') {
                    segment = hitResult.segment;
                } else if (hitResult.type == 'stroke') {
                    var location = hitResult.location;
                    segment = path.insert(location.index + 1, event.point);
                    path.smooth();
                }
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
    console.log(somethingSelected.strokeWidth)
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
                    textEditor.classList.add(document.getElementById("font-value").classList[1]);
                    textEditor.style.fontSize = document.getElementById("text-size-input").value * 0.74 + "pt";
                    textEditor.style.color = "rgba("+ fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
                    startingText = text.content;
                    var verticalPadding = 1,
                    left = (text.position.x-text.bounds.width/2) - (offsetX),
                    top = (text.position.y-text.bounds.height/2+verticalPadding) - (offsetY),
                    maxHeight = canvas.style.height - top,
                    maxWidth = canvas.style.width - left;
                    textEditor.style.top = top + "px";
                    textEditor.style.left = left + "px";
                    textEditor.innerHTML = text.content;
                    textEditor.style.display = "block";
                    textEditor.focus();
                    
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
        left = somethingSelected.position.x - somethingSelected.bounds.width/2 - (offsetX),
        top = somethingSelected.position.y - somethingSelected.bounds.height/2 + verticalPadding - (offsetY),
        maxHeight = canvas.style.height - top,
        maxWidth = canvas.style.width - left;
    textEditor.style.top = top + "px";
    textEditor.style.left = left + "px";
    textEditor.style.maxHeight = maxHeight + "px";
    textEditor.style.maxWidth = maxWidth + "px";
    if(editing){
        fillObj = getSelectTextStrokeInput();
        textEditor.classList.add(document.getElementById("select-font-value").classList[1]);
        textEditor.style.fontSize = somethingSelected.fontSize * 0.74 + "pt";
        textEditor.style.color = "rgba("+ fillObj.r + ", " + fillObj.g + ", " + fillObj.b + ", " + fillObj.a + ")";
    } else {
        fillObj = getTextStrokeInput();
        textEditor.classList.add(document.getElementById("font-value").classList[1]);
        textEditor.style.fontSize = document.getElementById("text-size-input").value * 0.74 + "pt";
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
    console.log("called update canvas")
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
        somethingSelected.remove();
        somethingSelected = undefined;
        if(autoselect){
            manualSelectToolOverride();
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                   //
//                                                                    DOWNLOAD                                                                       //
//                                                                                                                                                   //
//---------------------------------------------------------------------------------------------------------------------------------------------------//

document.getElementById("download-svg").addEventListener("click",function(event){
    fileName = "map.svg"
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
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
    document.getElementById("map-canvas").style.display = "block";
    // if(document.getElementById("map-canvas").classList.contains("ignore-pointer-events")){
    //     document.getElementById("map-canvas").classList.remove("ignore-pointer-events");
    // }
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

function exportToSVG(){
    if(somethingSelected.constructor.name == "Path" && somethingSelected.strokeColor.alpha == 0.00001){
        somethingSelected.strokeColor = "#000"
        somethingSelected.strokeWidth = 0;
    }
    var exportPath = somethingSelected.exportSVG({asString:true});
    AddToSVGJSCanvas(exportPath);
}