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


// variables to set time range
var currentTime = moment(); 
var startTime = moment('09:00 +0000', 'HH:mm Z'); // 9:00 am 
var endTime = moment('17:00 +0000', 'HH:mm Z'); // 5:00 pm 

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

// code to add classes to each time block depending on if they are in the past, present or future

function colorDisplay(){

    // is there a better way so the code is not DRY?


    // nine AM logic

    if (nineAm === startTime) {

        $("#hour9").addClass("present")

    } else {
        $("#hour9").addClass("past")
    }

    // ten AM logic

    if (tenAm === moment().hour(10)) {

        $("#hour10").addClass("present")

    } else if (tenAm < moment().hour(10)){

        $("#hour10").addClass("future")

    } else {
        $("#hour10").addClass("past");
    }

    // 11 AM logic

    if (elevenAm === moment().hour(11)) {

        $("#hour11").addClass("present")

    } else if (elevenAm < moment().hour(11)){

        $("#hour11").addClass("future")

    } else {
        $("#hour11").addClass("past");
    }

    // 12 PM logic

    if (twelvePm === moment().hour(12)) {

        $("#hour12").addClass("present")

    } else if (twelvePm < moment().hour(12)){

        $("#hour12").addClass("future")

    } else {
        $("#hour12").addClass("past");
    }

    // 1 PM logic

    if (onePm === moment().hour(1)) {

        $("#hour1").addClass("present")

    } else if (onePm < moment().hour(1)){

        $("#hour1").addClass("future")

    } else {
        $("#hour1").addClass("past");
    }

    // 2 PM logic

    if (twoPm === moment().hour(2)) {

        $("#hour2").addClass("present")

    } else if (twoPm < moment().hour(2)){

        $("#hour2").addClass("future")

    } else {
        $("#hour2").addClass("past");
    }

    // 3 PM logic

    if (threePm === moment().hour(3)) {

        $("#hour3").addClass("present")

    } else if (threePm < moment().hour(3)){

        $("#hour3").addClass("future")

    } else {
        $("#hour3").addClass("past");
    }

    // 4 PM logic

    if (fourPm === moment().hour(4)) {

        $("#hour4").addClass("present")

    } else if (fourPm < moment().hour(4)){

        $("#hour4").addClass("future")

    } else {
        $("#hour4").addClass("past");
    }

    // 5 PM logic

    if (fivePm === moment().hour(5)) {

        $("#hour5").addClass("present")

    } else if (fivePm < moment().hour(5)){

        $("#hour5").addClass("future")

    } else {
        $("#hour5").addClass("past");
    }
    
}

// code to save text to local storage

var hourHandler = function(hourNum){

    var hourBlock = $("#hour" + hourNum);

    $("#btn" + hourNum).click(function(){
        var hour9El = $("#hour" + hourNum).val();
        localStorage.setItem("btn" + hourNum, hour9El);
    })

    var loadHour = function () {

        hourBlock.text(localStorage.getItem("btn" + hourNum));

    }

    loadHour();


}
hourHandler(9);
hourHandler(10);
hourHandler(11);
hourHandler(12);
hourHandler(1);
hourHandler(2);
hourHandler(3);
hourHandler(4);
hourHandler(5);

colorDisplay();






