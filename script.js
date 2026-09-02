let selectedActivity = "";
let selectedDate = "";

function  showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

function noClick() {
    const message = document.getElementById("noMessage");
    message.innerText = 
    "Are you sure? 🥲 Try again...";
}
function chooseActivity(activity) {
    selectedActivity = activity;
    showPage("page3");
}

function chooseDate() {
    const dateInput = document.getElementById("date");
    if (dateInput.value === "") {
        alert("Please choose a date ❤️")
        return;
    }
    selectedDate = dateInput.value;
    showPage("page4");
}

function finishInvitation() {
    const timeInput = document.getElementById("time");
    if (timeInput.value === ""){
        alert("Please choose a time ❤️");
        return;
    }

    document.getElementById("finalDate").innerText = selectedDate;
    document.getElementById("finalTime").innerText = timeInput.value;
    document.getElementById("finalActivity").innerText = selectedActivity;

    showPage("page5");
}