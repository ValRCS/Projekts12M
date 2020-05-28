console.log("Starting scope.js");

//these are global
let myArr = [1, 2, 3, 4];
let secondArr = [100];
let myNumber = 77;

function modifyArrNotNumber(arr, number) {
    let localVar = 100;
    arr[2] = "Saule"; //so myArr will get modified if passed
    myArr[3] = "Meness"; //FIXME we CAN but should minimize global access
    console.log("Number is same as what was passed in", number);
    number = 25; //but myNumber will not be modified outside
    console.log("Number is modified inside", number);
    return number;
}

console.log(JSON.stringify(myArr));
console.log(myNumber);
myNumber = modifyArrNotNumber(myArr, myNumber); //i save result in global myNumber
console.log(JSON.stringify(myArr));
console.log(myNumber);

console.log(JSON.stringify(secondArr));
modifyArrNotNumber(secondArr, myNumber);
console.log(JSON.stringify(secondArr));
