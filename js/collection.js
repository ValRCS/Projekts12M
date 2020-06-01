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
};

// Only change code below this line
function updateRecords(id, prop, value) {
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

console.log(collection);
