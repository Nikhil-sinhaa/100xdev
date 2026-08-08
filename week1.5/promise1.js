const fs = require("fs");

function machine() {
    console.log("Hi, your order is booked.");

    return new Promise(function(resolve, reject) {
        console.log("Chef is cooking...");

        setTimeout(function() {
            console.log("Food is baked now.");
            resolve();
        }, 4000);
    });
}

function onDone() {
    console.log("Food dispatched.");
}

machine().then(onDone);