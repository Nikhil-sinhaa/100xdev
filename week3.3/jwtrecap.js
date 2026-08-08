const express = require('express');
const app = express();

function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket == 'free'){
        next()
    }
    else{
        res.status(403).send("access denied")
    }
}
function isOldEnough(age){
    if(age>=18)return true;
    else{
        return false;
    }
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=18)next();
    else{
        res.json({
            msg:"sorry you are not of age yet"
        })
    }
}
app.use(isOldEnoughMiddleware)
//app.use(ticketChecker);
app.get('/ride1',(req,res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you rode the first ride"
       } )
    }
    else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }
    
});
app.get('/ride2',(req,res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you rode the 2nd ride"
       } )
    }
    else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }
    
});
app.get('/ride3',(req,res)=>{
    res.send("you rode the third ride")
});
app.listen(3000)