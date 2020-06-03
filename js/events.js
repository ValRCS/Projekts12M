console.log("Started events.js");

function onMyClick() {
    console.log("Something was clicked");
}

function onBoxClick() {
    console.log("Boxy Click");
}

function addEventHandlers() {
    console.log("Adding Event Handlers");
    const myEl = document.getElementById("box-id01");
    //second way of adding handlers
    myEl.onclick = onMyClick; //notice i do not call the function i just pass it
    document.getElementById("box-id02").onclick = onBoxClick;
    //we could even make a function on the fly (anonymous function)
    document.getElementById("box-id03").onclick = () =>
        console.log("Clicked Box 3");
}

addEventHandlers();
