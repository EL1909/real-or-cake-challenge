let video = document.getElementById("cake-video"); 
let button = document.getElementById("cakebtn");

function playPause(){ 
    if (video.paused === false) {
        video.pause();
    } else {
        video.play();
    }
}
button.addEventListener('click', playPause)

video.addEventListener('timeupdate', function() {
    let videoCurrentTime = video.currentTime;
        if (videoCurrentTime >= 1) {
            video.pause();
        } else {
            video.play();
        }
    })