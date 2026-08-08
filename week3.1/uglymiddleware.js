const express = require('express');
const app = express();
app.use(express.json());
app.get('/health-checkup',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;
    const kidney = req.body.kidneys;
    if(username ==='Nikhil' && password==='pass'){
        //do something
        if(kidneyid ==1 || kidneyid ==2)
        res.json({
            msg:"your kidney is fine"
        })
        else{
            res.json({
                msg:"bad input"
            })
        }
    }
    else{
    res.status(400).json({
        "msg": "Wrong credential"
    })
    }
});

app.listen(3000)