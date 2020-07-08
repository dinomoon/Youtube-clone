const videoPlayer = document.querySelector(".video__player");
const video = document.querySelector(".video__player video");
const playBtn = document.querySelector("#play-btn");
const volumeBtn = document.querySelector("#volume-btn");
const fullScreenBtn = document.querySelector("#fullscreen-btn");
const currentTime = document.querySelector("#current-time");
const totalTime = document.querySelector("#total-time");

const handlePlayBtn = () => {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
    video.pause();
    playBtn.innerHTML = "<i class='fas fa-play'></i>";
  }
};

const handleVolumeBtn = () => {
  if (video.muted) {
    video.muted = false;
    volumeBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
  } else {
    video.muted = true;
    volumeBtn.innerHTML = "<i class='fas fa-volume-off'></i>";
  }
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
    fullScreenBtn.innerHTML = "<i class='fas fa-compress'></i>";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullScreenBtn.innerHTML = "<i class='fas fa-expand'></i>";
    }
  }
};

const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  return `${hours}:${minutes}:${totalSeconds}`;
};

const getCurrentTime = () => {
  currentTime.innerHTML = formatDate(video.currentTime);
};

const handleTime = () => {
  const totalTimeString = formatDate(video.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
};

const init = () => {
  playBtn.addEventListener("click", handlePlayBtn);
  volumeBtn.addEventListener("click", handleVolumeBtn);
  fullScreenBtn.addEventListener("click", toggleFullScreen);
  video.addEventListener("loadedmetadata", handleTime);
};

if (videoPlayer) {
  init();
}
