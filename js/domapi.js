const myApp = document.getElementById("myApp"); //then this will be globally accessible

function main() {
    console.log("Running Main");
    const app = document.getElementById("myApp");
    const boxes = document.getElementsByClassName("boxy");

    styleEl(app, "100%", "60%", "rgb(150, 130, 110)");
    styleEl(boxes[3], "100px", "200px", "rgb(70, 70, 110)");
    styleEl(boxes[1], "50px", "150px", "rgb(90, 70, 90)", "I am a simple box");

    addNewElement(app, "hr");
    addNewElement(app, "p");
    addNewElement(app, "p", "", [], "My paragraph");
    addNewElement(app, "p", "mySpecialPar", [], "My paragraph");
    addNewElement(
        app,
        "p",
        "mySpecialPar",
        ["boxy", "pale-bg"],
        "My paragraph"
    );

    for (let i = 0; i < 20; i++) {
        let myClassList = ["boxy"];
        if (i % 2 == 0) {
            myClassList.push("pale-bg");
        } else {
            myClassList.push("green-bg");
        }
        addNewElement(
            app,
            "p",
            "myParId_" + i, //remember id have to be unique
            myClassList,
            "My paragraph No." + i
        );
    }

    //could use global reference
    addNewElement(myApp, "hr");
    addNewElement(myApp, "div", "mydiv1", ["round-corners"], "My Text");
}

//TODO work on properties
function addNewElement(
    parent,
    tag,
    id = "",
    myClassList = [],
    text = "",
    styleObj = {}
) {
    const newEl = document.createElement(tag);
    if (id !== "") {
        newEl.id = id;
    }

    if (myClassList.length > 0) {
        newEl.classList.add(...myClassList);
    }

    if (text !== "") {
        console.log("Adding", text);
        newEl.innerText = text;
    }
    parent.appendChild(newEl);
}

//TODO refactor to use object for all properties
function styleEl(myElement, height, width, bgColor, text = "") {
    myElement.style.height = height;
    myElement.style.width = width;
    myElement.style.backgroundColor = bgColor;
    if (text !== "") {
        myElement.innerText = text;
    }
}
//could just delete this function
function unusedFun() {
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

    //if you remove boxy class boxes collection will be gone
    const boxes = document.getElementsByClassName("boxy");
    //different ways of looping through boxes
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "I am box No." + i;
    }
    // https://www.w3schools.com/howto/howto_js_add_class.asp
    for (const box of boxes) {
        // box.style.backgroundColor = "aquamarine";
        box.classList.add("round-corners");
        box.classList.remove("pale-bg");
        box.classList.add("green-bg");
    }

    //there is also forEach but we have to convert HTMLcollection to Array first
    Array.from(boxes).forEach((element) => {
        element.style.border = "dotted green 5px";
        // element.classList.remove("boxy");
    });

    // so newElement moves from my app div to last box div here
    console.log(boxes.length);
    boxes[4].appendChild(newElement);
    app.appendChild(boxes[4]);

    //so HTML collection keeps a LIVE reference
    //if we did not want a live count we could have converted to array
    // const myArr = Array.from(boxes) first;
    boxes[2].classList.remove("boxy");
    console.log(boxes.length);
}

main();
