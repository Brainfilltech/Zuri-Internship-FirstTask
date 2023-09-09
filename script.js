// const date = new Date("2023-9-8T6:36:1:222");
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];

// const currentUTCTime = Date.UTC(
//   year,
//   monthIndex,
//   day,
//   hour,
//   minute,
//   second,
//   millisecond
// );

const date = new Date("2023-9-8T16:42:1:111");

// document.body.innerHTML = currentUTCTime;
// console.log(currentUTCTime);

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
//const currentUTCDay = getDay();
const currentUTCTime = date.getUTCMilliseconds();

document.getElementById("currentDayOfTheWeek").textContent = day;
document.getElementById("currentUTCTime").textContent = currentUTCTime;

console.log(currentUTCTime, day);
