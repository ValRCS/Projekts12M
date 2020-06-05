const addBtn = document.querySelector(".btn-get-data");
const containerEl = document.querySelector(".container");

addBtn.onclick = onAddClick;
//we could of course add multiple functions
// addBtn.addEventListener("click", onAddClick);
// addBtn.addEventListener("click", (ev) => console.log("clik"));

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
