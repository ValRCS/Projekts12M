$(document).ready(main); //when document is ready fire main

//plain Javascript ways of firing main when document is ready
// window.onload = main;
// window.addEventListener("DOMContentLoaded", main);

function main() {
    $("h1").css("background-color", "green");
    $(".box")
        .css("height", "100px")
        .css("background-color", "red")
        .css("margin", "5px");
    // $(".box").css("background-color", "orange");
    $(".box").addClass("big-boxes");

    $("#change-boxes").on("click", (event) => console.log("Clicked me"));

    //we add listeners to ALL elements selected with (".box")
    // in this case all elements which have class box
    $(".box").on("click", onBoxClick);

    $(".box03").remove();
    //example on how we can get mouse coordinates when mouse is moved
    // $(document).on("mousemove", (ev) => console.log(ev.offsetX, ev.offsetY));
    // $(".box").on("mousemove", (ev) =>
    //     console.log("Box", ev.offsetX, ev.offsetY)
    // );
    //change text for all children of .container
    $(".container").children().text("All my children");

    //plain Javascript
    const newEl = document.createElement("p");
    newEl.innerText = "Some content";
    document.getElementById("id-box-2").appendChild(newEl);

    //jQuery i could append multiple elements
    $("#id-box-2").append("<p>New Paragraph</p>");
    $(".box").append("<p>paragraphs for all</p>");
}

function onBoxClick(event) {
    console.log(event.currentTarget.id);
    event.currentTarget.innerText = "Kaste " + event.currentTarget.id;
    if (event.target.style.backgroundColor === "orange") {
        event.target.style.backgroundColor = "red";
    } else {
        event.target.style.backgroundColor = "orange";
    }
}
