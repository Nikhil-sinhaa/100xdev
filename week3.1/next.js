const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
console.log("req1")
next();
},
(req,res,next)=>{
console.log("req2")
next();
}

);

app.listen(3000)