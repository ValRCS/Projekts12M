const addBtn = document.querySelector(".btn-fetch-data");
const ajaxBtn = document.querySelector(".btn-ajax-data");
const getAllBtn = document.querySelector(".btn-all-data");
const containerEl = document.querySelector(".container");
const urlAddr = document.getElementById("url-field");
const clearAll = document.querySelector(".btn-clear-data");

addBtn.onclick = onAddClick;
ajaxBtn.onclick = onAjaxClick;
getAllBtn.onclick = onAllClick;
//now we can use Enter to get new data
urlAddr.onchange = onAllClick;

clearAll.onclick = (event) => {
    console.log(
        "Clicked on",
        event.currentTarget.innerText,
        "Clearing elements"
    );
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    }
};
//we could of course add multiple functions
// addBtn.addEventListener("click", onAddClick);
// addBtn.addEventListener("click", (ev) => console.log("clik"));

function onAllClick(event) {
    console.log(
        "Clicked on All button with classlist",
        event.currentTarget.classList
    );
    fetch(urlAddr.value)
        .then((response) => response.json())
        .then((json) => processManyElements(json));
}

function processManyElements(json) {
    if (Array.isArray(json)) {
        console.log("Cool we got an array and we can proceed!");
        console.log(`Got ${json.length} elements to process`);
    } else {
        console.log("Hmm instead we got something", typeof json);
        //early return
        return;
    }
    //iterate over array with of (not in!!!)
    // for (const jsonObj of json) {
    //     createMyElement(jsonObj);
    //     const newHr = document.createElement("hr");
    //     containerEl.appendChild(newHr);
    // }
    //alternative when we need an index
    for (let i = 0; i < json.length; i++) {
        createMyElement(json[i]);
        const newHr = document.createElement("hr");
        //if for some reason we wanted to access individual hr elements
        newHr.id = "hr-" + i;
        containerEl.appendChild(newHr);
    }
}

function onAjaxClick() {
    console.log("Clicked AJAX button");
    //https://api.jquery.com/jquery.ajax/
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        cache: true, //TODO read up on cache refresh times
    }).done(createMyElement);
}

function onAddClick() {
    console.log("Going to add some Data!");
    //we do not want for external calls to block!
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => createMyElement(json));
}

function createMyElement(json) {
    console.log(json);
    console.log(json.title);
    const newEl = document.createElement("p");
    newEl.innerText = json.title;
    containerEl.appendChild(newEl);

    //iterate over objects properties
    //notice in for objects (for arrays we used of)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    for (const prop in json) {
        console.log(prop, json[prop]);
        const newDiv = document.createElement("div");
        newDiv.innerText = prop + ":" + json[prop];
        newDiv.classList.add("inner-box");
        newEl.appendChild(newDiv);
    }
}
