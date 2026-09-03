let selectedActivity = "";
let selectedDate = "";
let recipientName = "";
// Check the name
function checkName() {
    const nameInput = document.getElementById("nameInput");
    const nameMessage = document.getElementById("nameMessage");
    if (!nameInput) {
        alert("ERROR: nameInput was not found!");
        return;
    }
    const enteredName = nameInput.value.trim();
    if (enteredName === "") {
        nameMessage.innerText = "Please enter your name 👇🏽";
        return;
    }
    if (enteredName.toLowerCase() === "laylah") {
        recipientName = "Laylah";
        showPage("page1");
    } else {
        nameMessage.innerText =
 "Hmm... I don't think that's right 😏 Try again.";
    }
}
// Show a page
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.classList.remove("active");
    });
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}
// NO button
function noClick() {
    const message = document.getElementById("noMessage");
    message.innerText = "Are you sure? Try again... ";
}
// Choose activity
function chooseActivity(activity) {
    selectedActivity = activity;
    showPage("page3");
}
// Choose date
function chooseDate() {
    const dateInput = document.getElementById("date");
    if (dateInput.value === "") {
        alert("Please choose a date ");
        return;
    }
    selectedDate = dateInput.value;
    showPage("page4");
}
// Finish invitation
function finishInvitation() {
    const time = document.getElementById("time").value;
    if (time === "") {
        alert("Please choose a time ");
        return;
    }
    document.getElementById("finalDate").textContent = selectedDate;
    document.getElementById("finalTime").textContent = time;
    document.getElementById("finalActivity").textContent = selectedActivity;
    document.getElementById("recipientName").textContent = recipientName;
    showPage("page5");
}