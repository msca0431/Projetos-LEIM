/**
 * Created by ruimfjesus on 02/11/2017.
 */
let video = null;


function new_videoPlayer() {
    video = document.getElementsByTagName("video")[0];
    video.controls = false;
    let ppbutton = document.getElementById("playpause");

    video.addEventListener('play', function () {
        ppbutton.title = "pause";
        ppbutton.innerHTML = "pause";
    }, false);

    video.addEventListener('pause', function () {
        ppbutton.title = "play";
        ppbutton.innerHTML = "play";
    }, false);

    video.addEventListener('ended', function() {
        this.pause(); }, false);
}

function togglePlay() {
    if (video.paused || video.ended) {
        if (video.ended) video.currentTime = 0;
        video.play();
    }
    else {
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
