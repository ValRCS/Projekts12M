console.log("Starting scope.js");

var myState = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats",
};

//these are global
let myArr = [1, 2, 3, 4];
let secondArr = [100];
let myNumber = 77;

function modifyArrNotNumber(arr, number) {
    let localVar = 100;
    if (number <= 12) {
        // Change this line
        return "Smaller Than or Equal to 12";
    }
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

var names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // Only change code above this line
}
