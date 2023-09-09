const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = days[d.getDay()];
const currentUTCTime = d.getUTCMilliseconds();

document.getElementById("currentDayOfTheWeek").textContent = day;
document.getElementById("currentUTCTime").textContent = currentUTCTime;
