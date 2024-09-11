const hourTime = document.querySelector(".hourTime");
const minuteTime = document.querySelector(".minuteTime");
const secondTime = document.querySelector(".secondTime");
const millisecondTime = document.querySelector(".millisecondTime");

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resetBtn = document.querySelector(".resetBtn");

const lapList = document.querySelector(".lapList");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

startBtn.addEventListener("click", () => {
  interval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  addToLaplist();
  clearInterval(interval);
  resetData();
  startBtn.disabled = false;
  pauseBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  pauseBtn.disabled = true;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  pauseBtn.disabled = false;
  startBtn.disabled = false;
  resetData();
});

const updateTimer = () => {
  millisecond++;
  if (millisecond === 100) {
    millisecond = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        hour++;
        if (hour === 24) {
          hour = 0;
        }
      }
    }
  }

  displayTimer();
};

const displayTimer = () => {
  millisecondTime.textContent = padTimer(millisecond);
  secondTime.textContent = padTimer(second);
  minuteTime.textContent = padTimer(minute);
  hourTime.textContent = padTimer(hour);
};

const padTimer = (time) => {
  return time.toString().padStart(2, "0");
};

const resetData = () => {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  displayTimer();
};

const addToLaplist = () => {
  const lapTime = `${padTimer(hour)} : ${padTimer(minute)} : ${padTimer(
    second
  )} : ${padTimer(millisecond)}`;

  const listItem = document.createElement("li");

  listItem.innerHTML = `<span>Lap${
    lapList.childElementCount + 1
  } : </span>${lapTime}`;

  lapList.appendChild(listItem);
};
