const express = require('express');
const app = express();

app.get('/intrest',(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const amt= parseInt(req.amt.principal);
    const i = (principal*rate*amt)/100;
    const total = principal + i;
    res.send({
        total:total,
        interest:i
    })
});

app.listen(3000);