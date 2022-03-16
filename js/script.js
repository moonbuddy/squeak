const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const idbutton = document.getElementById('idbutton');

// Prompt to select media stream, pass to video element, then play

button.addEventListener('click', async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
  }
});

idbutton.addEventListener('click', async () => {
  // Start picture in picture
  await videoElement.requestPictureInPicture();
});
