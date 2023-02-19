const timerEl = document.getElementById("timer");

//stop watch - code
let seconds = 0;
let minutes = 0;
let hours = 0;

//stopwatch function
function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //to get two zeroes
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (timerEl.innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

//playpause function - working
const playPauseBtnEl = document.getElementById("playpausebtn");

//timer variables
let timerStatus = "stopped";
let timerInterval = null;

//start and pause
playPauseBtnEl.addEventListener("click", function () {
  //Adding Pause Button
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);

    playPauseBtnEl.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);

    playPauseBtnEl.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

//Reset Funtion
const resetEL = document.querySelector("#resetbtn");

resetEL.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;

  timerEl.innerHTML = "00:00:00";
  timerStatus = "stopped";
  playPauseBtnEl.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});
