const addBtn = document.querySelector(".btn-fetch-data");
const ajaxBtn = document.querySelector(".btn-ajax-data");
const containerEl = document.querySelector(".container");

addBtn.onclick = onAddClick;
ajaxBtn.onclick = onAjaxClick;
//we could of course add multiple functions
// addBtn.addEventListener("click", onAddClick);
// addBtn.addEventListener("click", (ev) => console.log("clik"));

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
}
