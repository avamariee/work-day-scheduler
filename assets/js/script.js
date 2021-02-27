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

function colorDisplay(hourNum){


    var today = new Date();
    var hours = today.getHours();

    if (hours == parseInt(hourNum)) {
        $("#hour" + hourNum).addClass('present')

    } else if (hours < parseInt(hourNum)) {
        $("#hour" + hourNum).addClass('future')

    } else {
        $("#hour" + hourNum).addClass('past')
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
hourHandler(13);
hourHandler(14);
hourHandler(15);
hourHandler(16);
hourHandler(17);

colorDisplay(9);
colorDisplay(10);
colorDisplay(11);
colorDisplay(12);
colorDisplay(13);
colorDisplay(14);
colorDisplay(15);
colorDisplay(16);
colorDisplay(17);






