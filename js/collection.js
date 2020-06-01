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
