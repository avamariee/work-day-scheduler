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

// code to add classes to each time block depending on if they are in the past, present or future

function colorDisplay(){

}

// code to save text to local storage

var hourHandler = function(hourNum){

    var hourBlock = document.getElementById("hour" + hourNum);

    document.getElementById("btn" + hourNum).addEventListener("click", function(){
        var hour9El = document.querySelector("#hour" + hourNum).value;
        localStorage.setItem("btn" + hourNum, hour9El);
    })

    var loadHour = function () {

        hourBlock.innerText = localStorage.getItem("btn" + hourNum);

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






