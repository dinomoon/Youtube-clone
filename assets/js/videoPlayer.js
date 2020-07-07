const videoPlayer = document.querySelector(".video__player");
const video = document.querySelector(".video__player video");
const playBtn = document.querySelector("#play-btn");
const volumeBtn = document.querySelector("#volume-btn");
const fullScreenBtn = document.querySelector("#fullscreen-btn");

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

const init = () => {
  playBtn.addEventListener("click", handlePlayBtn);
  volumeBtn.addEventListener("click", handleVolumeBtn);
  fullScreenBtn.addEventListener("click", toggleFullScreen);
};

if (videoPlayer) {
  init();
}
