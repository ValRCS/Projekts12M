console.log("Slider examples");
//setup initial values
document.querySelector(".result").innerText = document.getElementById(
    "myRange"
).value;
document.querySelector(".result2").innerText = document.getElementById(
    "myRange"
).value;

document.getElementById("myRange").onchange = (ev) => {
    document.querySelector(".result").innerText =
        "Change:" + ev.currentTarget.value;
};

document.getElementById("myRange").oninput = (ev) => {
    document.querySelector(".result2").innerText =
        "OnInput:" + ev.currentTarget.value;
};
