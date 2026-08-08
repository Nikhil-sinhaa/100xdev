const express = require('express');
const app = express();
var users = [{
    name: 'John',
    kidneys: [
    {healthy:false },
    {healthy:true},
]
}]
app.use(express.json());
app.get("/",(req,res)=>{
    const johnkidneys = users[0].kidneys;
    const noOfKidney = johnkidneys.length;
    let healthykidney = 0;
    for(let i = 0 ; i<noOfKidney;i++){
        if(johnkidneys[i].healthy ){
            healthykidney+=1;
        }
    }
    const unhealthykidney = noOfKidney-healthykidney;
    res.json({
        noOfKidney,
        healthykidney,
        unhealthykidney
    })
} )
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message:"Kidney added"
    })
} )
app.put("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    for(let i = 0 ; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i]["healthy"]==false){
            users[0].kidneys[i]["healthy"]=true;
        }
    }
    res.json({
        message:"Kidney is healthy now"
    })
} )
app.delete("/", (req, res) => {
    if (isThereAtLeastOneUnhealthyKidney()) {
        let newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push(users[0].kidneys[i]);
            }
        }

        users[0].kidneys = newKidneys;

        res.json({
            msg: "Done"
        });
    } else {
        res.status(411).json({
            msg: "You have no bad kidney"
        });
    }
});
function isThereAtLeastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }

    return atLeastOneUnhealthyKidney;
}
app.listen(3000)