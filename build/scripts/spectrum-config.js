var changeLandFillInput,enableLandFillInput,disableLandFillInput,
    getLandFillInput,changeLandBorderInput,enableLandBorderInput,
    disableLandBorderInput,getLandBorderInput,changeLandTextureInput,
    enableLandTextureInput,disableLandTextureInput,getLandTextureInput,
    changeSelectLandFillInput,enableSelectLandFillInput,disableSelectLandFillInput,
    getSelectLandFillInput,changeSelectLandBorderInput,enableSelectLandBorderInput,
    disableSelectLandBorderInput,getSelectLandBorderInput,changeSelectLandTextureInput,
    enableSelectLandTextureInput,disableSelectLandTextureInput,getSelectLandTextureInput,
    changeTextStrokeInput,enableTextStrokeInput,disableTextStrokeInput,getTextStrokeInput,
    changeSelectTextStrokeInput,enableSelectTextStrokeInput,disableSelectTextStrokeInput,getSelectTextStrokeInput;
$(document).ready(function() {
    var options = {
        flat:false,
        showInput: true,
        showInitial: false,
        allowEmpty: true,
        showAlpha: true,
        disabled: false,
        localStorageKey: "local-pallete",
        showPalette: true,
        showPaletteOnly: false,
        togglePaletteOnly: true,
        showSelectionPalette: true,
        togglePaletteMoreText: "custom",
        togglePaletteLessText: "custom",
        preferredFormat: "rgb",
        chooseText: "done",
        palette: [["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"]],
        maxSelectionSize:16,
    };
    // LAND
    $("#land-fill-input").spectrum(options);
    changeLandFillInput = color => {
        $("#land-fill-input").spectrum("set", color);
    }
    enableLandFillInput = color => {
        $("#land-fill-input").spectrum("enable");
    }
    disableLandFillInput = color => {
        $("#land-fill-input").spectrum("disable");
    }
    getLandFillInput = color => {
        return $("#land-fill-input").spectrum("get").toRgb();
    }
    $("#land-border-fill-input").spectrum(options);
    changeLandBorderInput = color => {
        $("#land-border-fill-input").spectrum("set", color);
    }
    enableLandBorderInput = color => {
        $("#land-border-fill-input").spectrum("enable");
    }
    disableLandBorderInput = color => {
        $("#land-border-fill-input").spectrum("disable");
    }
    getLandBorderInput = color => {
        return $("#land-border-fill-input").spectrum("get").toRgb();
    }
    $("#land-texture-fill-input").spectrum(options);
    
    changeLandTextureInput = color => {
        $("#land-texture-fill-input").spectrum("set", color);
    }
    enableLandTextureInput = color => {
        $("#land-fitexturell-fill-input").spectrum("enable");
    }
    disableLandTextureInput = color => {
        $("#land-texture-fill-input").spectrum("disable");
    }
    getLandTextureInput = color => {
        return $("#land-texture-fill-input").spectrum("get").toRgb();
    }
    
    
    // LAND SELECT
    $("#select-land-fill-input").spectrum(options);
    changeSelectLandFillInput = color => {
        $("#select-land-fill-input").spectrum("set", color);
    }
    enableSelectLandFillInput = color => {
        $("#select-land-fill-input").spectrum("enable");
    }
    disableSelectLandFillInput = color => {
        $("#select-land-fill-input").spectrum("disable");
    }
    getSelectLandFillInput = color => {
        return $("#select-land-fill-input").spectrum("get").toRgb();
    }
    $("#select-land-border-fill-input").spectrum(options);
    changeSelectLandBorderInput = color => {
        $("#select-land-border-fill-input").spectrum("set", color);
    }
    enableSelectLandBorderInput = color => {
        $("#select-land-border-fill-input").spectrum("enable");
    }
    disableSelectLandBorderInput = color => {
        $("#select-land-border-fill-input").spectrum("disable");
    }
    getSelectLandBorderInput = color => {
        return $("#select-land-border-fill-input").spectrum("get").toRgb();
    }
    $("#select-land-texture-fill-input").spectrum(options);
    
    changeSelectLandTextureInput = color => {
        $("#select-land-texture-fill-input").spectrum("set", color);
    }
    enableSelectLandTextureInput = color => {
        $("#select-land-fitexturell-fill-input").spectrum("enable");
    }
    disableSelectLandTextureInput = color => {
        $("#select-land-texture-fill-input").spectrum("disable");
    }
    getSelectLandTextureInput = color => {
        return $("#select-land-texture-fill-input").spectrum("get").toRgb();
    }
    
    // TEXT
    $("#text-fill-input").spectrum(options);
    changeTextStrokeInput = color => {
        $("#text-fill-input").spectrum("set", color);
    }
    enableTextStrokeInput = color => {
        $("#text-fill-input").spectrum("enable");
    }
    disableTextStrokeInput = color => {
        $("#text-fill-input").spectrum("disable");
    }
    getTextStrokeInput = color => {
        return $("#text-fill-input").spectrum("get").toRgb();
    }
    
    
    // TEXT SELECT
    $("#text-land-fill-input").spectrum(options);
    changeSelectTextStrokeInput = color => {
        $("#select-text-fill-input").spectrum("set", color);
    }
    enableSelectTextStrokeInput = color => {
        $("#select-text-fill-input").spectrum("enable");
    }
    disableSelectTextStrokeInput = color => {
        $("#select-text-fill-input").spectrum("disable");
    }
    getSelectTextStrokeInput = color => {
        return $("#select-text-fill-input").spectrum("get").toRgb();
    }
});