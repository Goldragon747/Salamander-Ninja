const animationQue = [
    "sn_spot_1",
    "sn_spot_2",
    "sn_spot_3",
    "sn_spot_4",
    "sn_spot_5",
    "sn_spot_6",
    "sn_spot_7",
    "sn_spot_8",
    "sn_spot_9",
    "sn_spot_10",
    "sn_headgear",
    "sn_body",
    "sn_title_1",
    "sn_title_2",
    "sn_slogan",
    "main-container"
    ];
    
const RunAnimation = id => {
    let currentElementStyle = document.getElementById(animationQue.shift()).style;
    currentElementStyle.WebkitAnimationPlayState = "running";
    currentElementStyle.animationPlayState  = "running";
    currentElementStyle.opacity = 1;
}

const RunAnimationX = id => {
    var firstElementStyle = document.getElementById("sn_x").style;
    firstElementStyle.fill = "#D50000";
    firstElementStyle.WebkitAnimationPlayState = "running";
    firstElementStyle.animationPlayState  = "running";
    firstElementStyle.opacity = 1;
    setTimeout(() => {
        let secondElementStyle = document.getElementById("sn_x_fill").style;
        secondElementStyle.WebkitAnimationPlayState = "running";
        secondElementStyle.animationPlayState  = "running";
        firstElementStyle.fill = "#263238";
    }, 500);
}

const RunSNAnimation = () => {
    let delay = 0;
    for(let i = 0; i < 5; i++){
        setTimeout(RunAnimation,delay);
        delay += 100;
    }
    for(let i = 0; i < 5; i++){
        setTimeout(RunAnimation,delay);
        delay += 50;
    }
    setTimeout(RunAnimationX,delay);
    delay += 500;
    setTimeout(RunAnimation,delay);
    setTimeout(RunAnimation,delay);
    delay += 500;
    setTimeout(RunAnimation,delay);
    setTimeout(RunAnimation,delay);
    delay += 100;
    setTimeout(RunAnimation,delay);
    delay += 1750;
    setTimeout(() => {
        document.getElementById("sn_loadsvg").style.display = "none";
        document.getElementById("main-container").style.display = "flex";
        RunAnimation();
        // document.getElementsByTagName("body")[0].style.overflow = "auto";
    },delay);
};
RunSNAnimation();