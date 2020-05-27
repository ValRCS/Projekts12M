console.log("Starting scope.js");

var myGlobal = 10;
oopsAnotherGlobal = 1000;

function add2(a, b) {
    //do work here
    //pure function does not do anything except return the computation
    return a + b;
}

let mySum = add2(10, 25);
console.log(mySum);
console.log(add2(10, 2));
console.log(add2(25, 2));
console.log(add2(25, 5));
console.log(add2(30, 2));

//try to avoid changing Global variables
function changeGlobal(a) {
    // oopsGlobal = 100;
    myGlobal += a;
}
// console.log(oopsGlobal);
console.log(myGlobal);
changeGlobal(55);
console.log(myGlobal);
changeGlobal(1000);
console.log(myGlobal);
