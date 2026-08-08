const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.json())


app.get('/',(req,res)=>{
    res.send('Homepage of todo app')
});
app.post('/work',(req,req)=>{
    res.send(res.body);
});

