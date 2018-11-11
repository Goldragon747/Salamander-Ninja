var draw;

function AddTextureToPath(path){
    console.log("before",path)
    let svg = draw.svg(path);
    var pattern = draw.pattern(20, 20, function(add) {
        add.rect(20,20).fill('#f06')
        add.rect(10,10)
        add.rect(10,10).move(10,10)
      })
    for (let i = 0; i < svg.children().length; i++) {
        console.log("child",svg.children());
        svg.children()[i].attr({fill:"#fab"});
        
    }
    console.log("middle",svg)
    console.log("after",svg.svg())
    return svg.svg();
}
let currentTool = "select";
window.onload = () => {
    draw = SVG('svgjs-canvas');
}
var elementId = 0;
const AddToSVGJSCanvas = element => {
    element = element.replace(/[ ]/, ` id="svgjs_element_${++elementId}"`)
    draw.svg(element);
    var newElement = SVG.get(`svgjs_element_${elementId}`);
    newElement.click( e => {
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