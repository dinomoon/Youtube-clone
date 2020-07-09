const recordingBtn = document.querySelector("#recording-btn");
const recordingVideo = document.querySelector("#recording-video");
let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
  const { data } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(data);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordingBtn.addEventListener("click", stopRecording);
};

const stopRecording = () => {
  videoRecorder.stop();
  recordingBtn.removeEventListener("click", stopRecording);
  recordingBtn.addEventListener("click", getVideo);
  recordingBtn.innerHTML = "Start Recording";
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    streamObject = stream;
    recordingVideo.srcObject = stream;
    recordingVideo.muted = true;
    recordingVideo.play();
    recordingBtn.innerHTML = "Stop Recording";
    startRecording();
  } catch (error) {
    recordingBtn.innerHTML = "Sorry";
  } finally {
    recordingBtn.removeEventListener("click", getVideo);
  }
};

const init = () => {
  recordingBtn.addEventListener("click", getVideo);
};

if (recordingBtn) {
  init();
}
