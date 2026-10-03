"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cluster = require("cluster");
const os = require("os");
const totalCPUs = os.cpus().length;
const port = 3000;
if (cluster.isPrimary) {
    console.log('Number of CPUs is ' + totalCPUs);
    console.log('Primary PID is ' + process.pid);
    //fork workers
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('Let\'s fork another worker!');
        cluster.fork();
    });
}
else {
    const app = express();
    app.get('/', (req, res) => {
        res.send(`Hello World from Worker ${process.pid}`);
    });
    app.listen(port, () => console.log(`Listening on port ${port} and Worker ${process.pid}`));
}
//# sourceMappingURL=index.js.map