// alert("Hello world!");
// console.log("Hello World!");
// console.log(5 + 10);

function add2(a, b) {
    console.log(a + b);
}

function main() {
    var a = 9000;
    globbbb = 353252;
    console.log(globbbb);
    let myName = "Valdis";
    add2(2, 2);
    add2(5, 10);
    add2(myName, a); //in Javascript you can mix different types when adding
    let myArray = [1, 6, 8, 2, 70, 43545, 2, 6, 7];
    let myList = [
        ["Chocolate Bar", 15],
        ["Bread", 5],
        ["Circus", 7],
        ["Milk", 17],
        ["Cookies", 2],
    ];

    let arrLen = myArray.push(5, 9);
    console.log(arrLen, myArray.length);
    console.log(myArray);
    var myStr = 'I am a "double quoted" string inside "double quotes".';
    var someAdjective = "rewarding";
    var myStr = "Learning to code is ";
    myStr += someAdjective;
    console.log(myStr);
    console.log("hi there");
    console.log("Hi " + myName + " your power level is over " + a);
    console.log("My name is " + myName.length + " letters long");
    a = a + 10;
    console.log(a);

    var sum = 5 * 10; //bad name we can do this, but why call it sum then? no point
    console.log(sum);

    var result = 100 + 5 * 10; //better do this then
    console.log(result);
    result++; // same thing as result = result + 1;
    console.log(result);
    result++;
    result++; // could have just done result = result + 6
    console.log(result);
    result = result + 6;
    console.log(result);
    result--;
    console.log(result);
    var x = 0.1;
    var y = 0.2;
    var rez = x + y;
    console.log(rez);
}
// let rez = 1111; //this would be a global rez, keep these to minimum
console.log(rez); //this will be an error without global declaration

//we only run main when the window has been loaded, DOM tree has been made
window.onload = main;
