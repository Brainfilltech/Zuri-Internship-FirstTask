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

//const currentUTCTime = d.getUTCMilliseconds();

const currentUTCTime = new Date(2023, 8, 11, 14, 30, 0);
currentUTCTime.setHours(18, 36, 0, 0);
document.getElementById("currentDayOfTheWeek").textContent = day;
document.getElementById("currentUTCTime").textContent = currentUTCTime;
