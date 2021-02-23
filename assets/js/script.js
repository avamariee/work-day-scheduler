function dayDisplay() {

    console.log("Test.")

    var displayDay = document.createElement("h2")
    displayDay.classList.add("lead")
    displayDay.innerText = "Today is " + moment().format('LL') + ".";
    document.getElementById("currentDay").appendChild(displayDay)

}

dayDisplay();
