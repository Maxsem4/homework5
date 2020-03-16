$(document).ready(function() {
  // get time from moments
  const now = moment().format("MMMM Do YYYY");

  let hourDisplay = moment().format("H");

  // Display Current Date

  let $date = $("#currentDay");
  $date.text(now);

  // Store plans for the day

  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  if (storedPlans !== null) {
    textArray = storedPlans;
  }

  let $plannerDiv = $("#plannerContainer");
  $plannerDiv.empty();

  // Time divs and hour display

  for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;

    let $mainDiv = $("<div>");
    $mainDiv.addClass("row");
    $mainDiv.addClass("plannerRow");
    $mainDiv.attr("currentHour", hour);

    let $timeDiv = $("<div>");
    $timeDiv.addClass("col-md-2");

    const $timeSpan = $("<span>");

    $timeSpan.attr("class", "timeBox");

    let dispHour = 0;
    let clock = "";
    if (hour > 12) {
      dispHour = hour - 12;
      clock = "pm";
    } else {
      dispHour = hour;
      clock = "am";
    }
    // Create all Divs and attributes

    $timeSpan.text(`${dispHour} ${clock}`);

    $mainDiv.append($timeDiv);
    $timeDiv.append($timeSpan);

    let $plannerSpan = $("<input>");

    $plannerSpan.attr("id", `input-${index}`);
    $plannerSpan.attr("currentHour", index);
    $plannerSpan.attr("type", "text");
    $plannerSpan.attr("class", "hour");

    $plannerSpan.val(textArray[index]);

    let middleDiv = $("<div>");
    middleDiv.addClass("col-md-9");

    $mainDiv.append(middleDiv);
    middleDiv.append($plannerSpan);

    let $saveBtnDiv = $("<div>");
    $saveBtnDiv.addClass("col-md-1");

    let $saveBtn = $("<i>");
    $saveBtn.attr("id", `saveid-${index}`);
    $saveBtn.attr("save-id", index);
    $saveBtn.attr("class", "fa fa-save saveBtn");

    $mainDiv.append($saveBtnDiv);
    $saveBtnDiv.append($saveBtn);

    rowColoring($mainDiv, hour);

    $plannerDiv.append($mainDiv);
  }

  // Function to update color with time
  function rowColoring($plannerRow, hour) {
    if (hour < hourDisplay) {
      //
      $plannerRow.css("background-color", "#d3d3d3");
    } else if (hour > hourDisplay) {
      $plannerRow.css("background-color", "#ff6961");
    } else {
      $plannerRow.css("background-color", "#77dd77");
    }
  }

  // Save to local storage

  $(document).on("click", "i", function(event) {
    event.preventDefault();

    let $index = $(this).attr("save-id");

    let input = "#input-" + $index;
    let $value = $(input).val();

    textArray[$index] = $value;

    localStorage.setItem("storedPlans", JSON.stringify(textArray));
  });

  // function to color save button on change of input
  $(document).on("change", "input", function(event) {
    event.preventDefault();
    let i = $(this).attr("currentHour");
  });
});
