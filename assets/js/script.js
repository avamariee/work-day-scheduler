// variables to select each hour block

var nineAm = document.getElementById("hour-9");
var tenAm = document.getElementById("hour-10");
var elevenAm = document.getElementById("hour-11");
var twelvePm = document.getElementById("hour-12");
var onePm = document.getElementById("hour-1");
var twoPm = document.getElementById("hour-2");
var threePm = document.getElementById("hour-3");
var fourPm = document.getElementById("hour-4");
var fivePm = document.getElementById("hour-5");

// code to display the current day at the top of the page

function dayDisplay() {

    console.log("Test.")

    var displayDay = $("<h2>")
    displayDay.addClass("lead")
    displayDay.text("Today is " + moment().format('LL') + ".");
    $("#currentDay").append(displayDay)

}

$(document).ready(function(){
    dayDisplay();
})




