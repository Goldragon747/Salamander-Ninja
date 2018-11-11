var path,segment,text,isEditing,startingText;
var somethingSelected = false;
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
    // if(currentTool != "text" && textEditor.style.display == "block"){
    //     updateCanvas();
    //     text.content = startingText;
    // }
    switch(currentTool){
        case "select":
            segment = path = text = null;
            var hitResult = project.hitTest(event.point, hitOptions);
            if (!hitResult){
                somethingSelected = null;
                return;
            }
            if (event.modifiers.shift) {
                if (hitResult.type == 'segment') {
                    hitResult.segment.remove();
                };
                return;
            }
            if(event.item){
                if(event.item == somethingSelected){
                    somethingSelected = null;
                }else {
                    project.activeLayer.selected = false;
                    event.item.selected = true;
                    somethingSelected = event.item;
                }
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
        break;
        case "land":
            // If we produced a path before, deselect it:
            if (path) {
                path.selected = false;
            }

            // Create a new path and set its stroke color to black:
            path = new Path({
                segments: [event.point],
                strokeColor: 'black',
                // Select the path, so we can see its segment points:
                fullySelected: true,
                selected:true
            });
        break;
        case "text":
            var hitResult = project.hitTest(event.point, hitOptions);
            console.log(hitResult)
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
                        // fontWeight: 'bold',
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
                    textEditor.classList.add(document.getElementById("font-value").classList[1]);
                    textEditor.style.fontSize = document.getElementById("text-size-input").value * 0.74 + "pt";
                    textEditor.style.color = fillObj;
                    startingText = text.content;
                    var verticalPadding = 1,
                    left = (text.position.x-text.bounds.width/2) - (offsetX),
                    top = (text.position.y-text.bounds.height/2+verticalPadding) - (offsetY),
                    maxHeight = canvas.style.height - top,
                    maxWidth = canvas.style.width - left;
                    textEditor.style.top = top + "px";
                    textEditor.style.left = left + "px";
                    // textEditor.style.maxHeight = maxHeight + "px";
                    // textEditor.style.maxWidth = maxWidth + "px";
                    textEditor.innerHTML = text.content;
                    // paper.view.draw();
                    textEditor.style.display = "block";
                    textEditor.focus();
                }
            }
            
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
            }else {
                var offset = event.downPoint - event.point;
                paper.view.center = paper.view.center + offset;
                offsetX += offset.x;
                offsetY += offset.y;
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
        case "select":
        
        break;
        case "land":
            var segmentCount = path.segments.length;

            // When the mouse is released, simplify it:
            path.simplify(2);
            path.closed = true;
            path.smooth();
            var fillObj = getLandFillInput();
            var strokeObj = getLandBorderInput();
            var strokeWidth = document.getElementById("land-border-size-input").value;
            if( strokeWidth == 0){
                strokeObj.a = 0.00001;
                strokeWidth = 2;
            }
            path.style = {
                fillColor: new Color(fillObj.r/255,fillObj.g/255,fillObj.b/255,fillObj.a),
                strokeColor: new Color(strokeObj.r/255,strokeObj.g/255,strokeObj.b/255,strokeObj.a),
                strokeWidth: strokeWidth
            }
        break;
    }
}
function onMouseMove(event) {
    switch(currentTool){
        case "select":
            if(!somethingSelected){
                project.activeLayer.selected = false;
                if (event.item)
                    event.item.selected = true;
            }
        break;
        case "land":
        break;
    }
}
var toolPan = new paper.Tool();

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
    if(currentTool == "text"){
        startingText = text.content;
        var verticalPadding = 1,
            left = text.position.x-text.bounds.width/2 - (offsetX),
            top = text.position.y-text.bounds.height/2+verticalPadding - (offsetY),
            maxHeight = canvas.style.height - top,
            maxWidth = canvas.style.width - left;
        textEditor.style.top = top + "px";
        textEditor.style.left = left + "px";
        textEditor.style.maxHeight = maxHeight + "px";
        textEditor.style.maxWidth = maxWidth + "px";
        textEditor.innerHTML = text.content;
        text.visible=false;
        paper.view.draw();
        textEditor.style.display = "block";
    }
}
var updateCanvas = function(){
    textEditor.style.display = "none";
    text.content = textEditor.innerHTML.replace(/&nbsp;/g," ");
    text.visible = true;
    paper.view.draw();
    isEditing = false;
}
function onKeyDown(event) {
	switch(currentTool){
        case "select":
            if(event.key == "enter"){
                updateCanvas();
            }
            if(event.key == "escape"){
                updateCanvas();
                text.content = startingText;
            }
        break;
        case "land":
        break;
        case "text":
            if(event.key == "enter"){
                updateCanvas();
            }
            if(event.key == "escape"){
                updateCanvas();
                text.content = startingText;
            }
        break;
    }
	
}
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