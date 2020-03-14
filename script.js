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
