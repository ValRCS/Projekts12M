function main() {
    console.log("Running domapi examples");
    console.log("Running Main");

    const app = document.getElementById("myApp");
    app.style.height = "200px";
    app.style.width = "70%";
    app.style.backgroundColor = "#AAAA11";
    //https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
    // app.innerText = "My big bad application";
    // app.textContent = "My content";

    //try to avoid innerHTML
    // app.innerHTML = "<h2>My second headlin</h2><p>Lorem Ipsum</p>";
    const newElement = document.createElement("p");
    newElement.innerText = "I am new here";
    //until the next line newElement is hanging in the air
    app.appendChild(newElement);

    const boxes = document.getElementsByClassName("boxy");
    //different ways of looping through boxes
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "I am box No." + i;
    }
    for (const box of boxes) {
        box.style.backgroundColor = "aquamarine";
    }

    //there is also forEach but we have to convert HTMLcollection to Array first
    Array.from(boxes).forEach((element) => {
        element.style.border = "dotted green 5px";
    });

    // so newElement moves from my app div to last box div here
    boxes[4].appendChild(newElement);
    app.appendChild(boxes[4]);
}

main();
