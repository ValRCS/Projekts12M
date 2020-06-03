console.log("Started Clearing js");

//Add Listeners to each button

function addElement() {
    console.log("Adding SingleElement");
}

function addManyElements() {
    console.log("Adding Many Elements");
}

function deleteElements() {
    console.log("Clearing Elements");
}

function addEventHandlers() {
    console.log("adding Handlers");
    const addBtn = document.getElementById("btn-id-add");
    addBtn.onclick = addElement;
    const addManyBtn = document.getElementById("btn-id-add-many");
    addManyBtn.onclick = addManyElements;
    const clearBtn = document.getElementById("btn-id-clear");
    clearBtn.onclick = deleteElements;
    //add event handlers here
    //you will need to find the elements
    //TODO add button should call addElements
    //TODO clear button should call deleteElements
}

addEventHandlers();
