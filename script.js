const timerEl = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

startBtn.addEventListener("click", () => {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);
});

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  // disable button
  startBtn.disabled = true;
  stopBtn.disabled = false;

  return (
    (hours > 0 ? (hours < 9 ? "0" + hours : hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 0 ? milliseconds : "0" + milliseconds)
  );
}

stopBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  elapsedTime = 0;
  timerEl.textContent = "00:00:00";
  stopBtn.disabled = false;
  startBtn.disabled = false;
});
