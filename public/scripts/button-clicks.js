const selectButton = document.getElementById("tool-select");
const landButton = document.getElementById("tool-land");
const textButton = document.getElementById("tool-text");
const forestButton = document.getElementById("tool-forest");
const mountainButton = document.getElementById("tool-mountain");
const riverButton = document.getElementById("tool-river");
const roadButton = document.getElementById("tool-road");
const landmarkButton = document.getElementById("tool-landmark");
const mapButton = document.getElementById("tool-map");

var textEditor = document.getElementById('text-editor');

const RemoveHovers = () => {
    let buttons = [selectButton, landButton, textButton, forestButton, mountainButton, riverButton, roadButton, landmarkButton, mapButton];
    for (let i = 0; i < buttons.length; i++)
        buttons[i].classList.remove("tool-hover");
}

selectButton.addEventListener("click", evt => {
    ToolButtonPreEvents("select",false);
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

const ToolButtonPreEvents = (label, stop = true) => {
    RemoveHovers();
    currentTool = label;
}