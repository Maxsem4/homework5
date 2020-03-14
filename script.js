const saveBtn = document.getElementById("saveBtn");

function renderDate() {
  //time variables
  let myDate = new Date();

  let daym = myDate.getDate();
  let month = myDate.getMonth();
  let day = myDate.getDay();

  let dayArray = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  let monthArray = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  let myCurrentDate = document.getElementById("currentDay");
  myCurrentDate.textContent =
    "" + dayArray[day] + ", " + daym + " " + monthArray[month];
  myCurrentDate.innerText =
    "" + dayArray[day] + ", " + daym + "  " + monthArray[month];
}
renderDate();

function renderTime() {
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  if (h === 24) {
    h = 0;
  } else if (h > 12) {
    h = h - 0;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  let myTime = document.getElementById("time");
  myTime.textContent = "" + h + ":" + m;
  myTime.innerHTML = "" + h + ":" + m;

  setTimeout("renderTime()", 1000);
}
renderTime();
