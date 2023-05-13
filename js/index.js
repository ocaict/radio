const playBtn = document.querySelector("#play-btn");
const radio = document.getElementById("radio");
const radiosContainer = document.querySelector(".radios");

const playPause = () => {
  if (radio.paused) {
    radio.play();
    playBtn.textContent = "Pause"; // Update button label
  } else {
    radio.pause();
    playBtn.textContent = "Play"; // Update button label
  }
};

radiosContainer.addEventListener("click", (e) => {
  if (e.target.className.includes("ocamedia")) {
    radio.src = "http://stream.zeno.fm/yi1znummsq7vv";
    playPause();
  } else if (e.target.className.includes("radio-biafra")) {
    radio.src = "https://stream.zeno.fm/66t75vdudceuv";
    playPause();
  }
});

playPause();

playBtn.addEventListener("click", playPause);
