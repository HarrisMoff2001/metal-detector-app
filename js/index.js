"use strict";

const metalDetectorNoise = new Audio("assets/metalDetector.mp3");
metalDetectorNoise.loop = true;

document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("metal")) {
        metalDetectorNoise.currentTime = 0;
        metalDetectorNoise.play()
        //console.log(e.target.id, "is metal");
    }
    if (e.target.classList.contains("object")) {
        //console.log(e.target.id, "is not metal");
    }
});
document.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("metal")) {
        metalDetectorNoise.pause();
        metalDetectorNoise.currentTime = 0;
    }
});