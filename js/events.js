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

    addSecondaryHandlers();
}

function onSecondaryMouseUp() {
    console.log("Secondary Mouse UP!");
}

function addSecondaryHandlers() {
    console.log("Adding secondary handlers");
    const myElements = document.getElementsByClassName("secondary");
    for (const element of myElements) {
        console.log("Adding Handlers element with id:", element.id);
        //can make a new function
        element.onmousedown = () => console.log("Secondary mouse down");
        //can use existing function
        element.onmouseup = onSecondaryMouseUp;
    }
    //i need to convert myElements to Array to use forEach because HTML Collection does not have forEach
    //https://stackoverflow.com/questions/3871547/js-iterating-over-result-of-getelementsbyclassname-using-array-foreach/3871602
    // Array.from(myElements).forEach(
    //     (myEl) => (myEl.onmouseup = () => console.log("Mouse Up!"))
    // );
    //we can do this way by using existing function
    // Array.from(myElements).forEach((myEl) => {
    //     console.log("adding mouse up handler for element with id:", myEl.id);
    //     myEl.onmouseup = onSecondaryMouseUp;
    // });
}

addEventHandlers();
