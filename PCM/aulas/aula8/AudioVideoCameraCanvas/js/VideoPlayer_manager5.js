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

    video.addEventListener('ended', function () {
        this.pause();
    }, false);

    video.addEventListener('timeupdate', function () {
        let value = 0;
        if (video.currentTime > 0) {
            value = Math.floor((100 / video.duration) * video.currentTime);
        }
        document.getElementById("played").style.width = value + "%";
    }, false);
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

function changePlaybackSpeed(direction) {
    if (video.playbackRate != undefined) {
        if (direction == "-") video.playbackRate -= 1;
        else video.playbackRate += 1;
    }
    else {
        if (direction == "-") video.currentTime -= 1;
        else video.currentTime += 1;
    }
}

function changeVolume(direction) {
    let volume = Math.floor(video.volume * 10) / 10;
    video.muted = false;
    if (direction == "-") {
        if (volume <= 0.1) video.volume = 0;
        else video.volume -= 0.1;
    }
    else {
        if (volume >= 0.9) video.volume = 1;
        else video.volume += 0.1;
    }
}

function toggleMute() {
    let mute = document.getElementById("mute");
    if (video.muted) {
        mute.innerHTML = "mute";
        video.muted = false;
    }
    else {
        mute.innerHTML = "unmute";
        video.muted = true;
    }
}
