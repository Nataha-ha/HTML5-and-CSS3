var button = document.querySelector('.video-play-btn');
var video = document.querySelector('#video');

if (button.addEventListener) {
    button.addEventListener("click", play, false);
} else if (button.attachEvent) {
    button.attachEvent("onclick", play);
}

function play() {
    if (video.paused) {
        video.play();
        button.className = "video-play-btn-hide";
    } else {
        video.pause();
        button.className = "video-play-btn";
    }
}