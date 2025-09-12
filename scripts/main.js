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
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("time");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
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
