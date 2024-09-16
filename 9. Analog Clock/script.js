// second hand 60s = 360deg
// minute hand 60m= 360deg
// hour hand 12h = 360deg

const secondsHand = document.querySelector(".secondsHand");
const minutesHand = document.querySelector(".minutesHand");
const hoursHand = document.querySelector(".hoursHand");

setInterval(() => {
  let time = new Date();

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  let hourRotation = 3 * hour + hour / 2;
  let minuteRotation = 6 * minute;

  let secondRotation = 6 * second;

  hoursHand.style.transform = `rotate(${hourRotation}deg)`;
  hoursHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondsHand.style.transform = `rotate(${secondRotation}deg)`;
});
