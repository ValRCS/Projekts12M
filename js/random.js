function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

function throwDice(times) {
    let total = 0;
    for (let i = 0; i < times; i++) {
        total += randomRange(1, 6);
    }
    return total / times; //should be average
}

console.log(throwDice(10));
console.log(throwDice(100));
console.log(throwDice(1000));
console.log(throwDice(10000));
console.log(throwDice(100000));
console.log(throwDice(500000));
