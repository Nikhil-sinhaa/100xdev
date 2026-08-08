const express = require('express');
const zod = require('zod');
const app = express();

app.use('express.json()');


app.post("/",function(req,res){
    const kidney = req.body.kidneys;
    const kidneylength = kidney.length;
    res.send('You have '+kidneylength + ' kidneys')
});

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with ur server"
    })
})
app.listen(3000);