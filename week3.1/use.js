const express = require('express');

const app = express();

let numberofRequests = 0 ;
function calculateRequests(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next()
}
app.use(calculateRequests);


app.post("/",function(req,res){
    console.log("hi there");
    res.send('hi')
})
app.listen(3000);