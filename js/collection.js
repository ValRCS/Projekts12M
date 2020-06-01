// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        album: "ABBA Gold",
    },
    favorite: {
        artist: "Jumprava",
        tracks: ["Pa vējam"],
    },
};

// Only change code below this line
function updateRecords(id, prop, value) {
    //sanity check first if there is such an id
    if (!collection.hasOwnProperty(id)) {
        console.log("oops no such id", id);
        return collection;
    }

    if (value === "") {
        delete collection[id][prop];
        return collection;
    }

    //here we are guaranteed that there is some value
    if (prop !== "tracks") {
        collection[id][prop] = value;
    }
    if (prop === "tracks") {
        if (!collection[id].hasOwnProperty("tracks")) {
            collection[id]["tracks"] = [];
        }
        collection[id][prop].push(value);
    }

    return collection;
}

console.log(JSON.stringify(collection));
console.log(collection);
updateRecords("nosuchid", "album", "Aluminija Cūka");
updateRecords(2468, "album", "Aluminija Cūka");
updateRecords(2468, "tracks", "Purple");
updateRecords(2468, "artist", "Fredis");
updateRecords(2468, "artist", "Fredis");
updateRecords(1245, "artist", "");

var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
// for (let i=0; i < myArr.length ; i++){
//   total += myArr[i];
//   console.log(i, myArr[i], "Total is", total);
//   //add to total here
// }
//new ES6 for iteration over arrays
for (const element of myArr) {
    console.log(element);
    total += element;
}
console.log(total);

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    // for (let i=0; i < arr.length; i++) {
    //   for (let j=0; j < arr[i].length; j++) {
    //     console.log(arr[i][j]);
    //     product *= arr[i][j];
    //   }
    // }

    for (const innerArr of arr) {
        for (const element of innerArr) {
            product *= element;
        }
    }

    // Only change code above this line
    return product;
}

// Setup
var contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    //loop through contacts
    //check if firstName matches name
    //if prop exists for that object return the value for the property
    for (const contact of contacts) {
        console.log(contact.firstName);
        if (contact.firstName === name) {
            console.log("Found Match");
            //TODO check if property exists
            if (contact.hasOwnProperty(prop)) {
                return contact[prop];
            } else {
                //so no such property
                return "No such property";
            }
        }
    }

    //iterating with index, also works fine
    // for (let i=0; i< contacts.length;i++) {
    //     console.log(contacts[i].firstName);
    // }
    //if loop finishes then that means there is no such contact
    return "No such contact";
    // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
//console.log(lookUpProfile("Akira", "dislikes"));
//console.log(lookUpProfile("Valdis", "likes"));
