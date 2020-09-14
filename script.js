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

let buttonBurger = document.querySelector('.burger-menu');
let nav = document.querySelector('.modal');


buttonBurger.onclick = function () {
    nav.classList.toggle('open');
    nav.classList.toggle('close');
}