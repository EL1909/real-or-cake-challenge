
let video = document.getElementById("cake-video"); 
let button = document.getElementById("real");

// Play / pause.
button.addEventListener('click', function () {
    if (video.paused === false) {
        video.pause();
        video.firstChild.nodeValue = 'Play';
    } else {
        video.play();
        video.firstChild.nodeValue = 'Pause';
    }
});