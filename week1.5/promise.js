const fs = require("fs");

// My own asynchronous function
function kiratsReadFile() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

// Callback function
function onDone(data) {
    console.log(data);
}

kiratsReadFile().then(onDone).catch(console.error);


const d = new Promise(function(resolve){
    resolve();
});
function callback(){
    console.log(d)
}
//d.then(callback);


