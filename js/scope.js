let myArr = [1, 2, 3, 4];
let myNumber = 77;

function modifyArrNotNumber(arr, number) {
    arr[2] = "Saule"; //so myArr will get modified if passed
    number = 25; //but myNumber will not be modified
    return arr[0] + number;
}
console.log(myArr);
console.log(myNumber);
modifyArrNotNumber(myArr, myNumber);
console.log(myArr);
console.log(myNumber);

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
