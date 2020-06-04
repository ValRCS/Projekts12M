function addElement(tag) {
    //we get the first match with querySelector
    const innerCont = document.querySelector(".inner-cont");
    const newEl = document.createElement(tag);
    newEl.innerText = "Saturs";
    innerCont.appendChild(newEl);
}
function onBtnPress(event) {
    console.log("Button pressed with text:", event.target.innerText);
    addElement("div");
}
function addHandlers() {
    console.log("Adding Handlers");
    const addBtn = document.getElementById("id-add-element");
    addBtn.addEventListener("click", () => console.log("Add button pressed"));
    addBtn.addEventListener("click", onBtnPress);
}
addHandlers();
