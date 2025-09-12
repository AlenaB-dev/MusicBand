/**
 * Script for navbar (smooth appearence burger-menu)
 */
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navbarToggler.addEventListener("click", () => {
  navLinks.forEach((link, index) => {
    link.style.transition = `opacity 0.3s ease ${index * 0.05}s`;
    link.style.opacity = link.style.opacity === "1" ? "0" : "1";
  });
});

/**
 * Script for player
 */

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("time");

const volumeWrapper = document.querySelector(".volume-wrapper");
const volumeControl = document.getElementById("volumeControl");
const muteBtn = document.getElementById("mute-btn");
const volumeOn = document.getElementById("volumeOn");
const volumeOff = document.getElementById("volumeOff");

// Play/Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

// Progress renew
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  timeDisplay.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// Volume
let volumeVisible = false;

const showVolume = () => {
  volumeVisible = true;
  volumeControl.style.display = "block";
};

const hideVolume = () => {
  volumeVisible = false;
  volumeControl.style.display = "none";
};

// Клик по кнопке — переключаем mute и показываем ползунок
muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  volumeOn.style.display = audio.muted ? "none" : "block";
  volumeOff.style.display = audio.muted ? "block" : "none";

  showVolume();
});

// Ползунок остаётся видимым при наведении на кнопку или сам ползунок
volumeWrapper.addEventListener("mouseenter", showVolume);
volumeWrapper.addEventListener("mouseleave", hideVolume);

// Управление громкостью
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
  audio.muted = volumeControl.value == 0;
  volumeOn.style.display = audio.muted ? "none" : "block";
  volumeOff.style.display = audio.muted ? "block" : "none";
});
