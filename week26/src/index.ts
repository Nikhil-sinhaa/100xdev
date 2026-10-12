import express from "express"
const app = express();
function middleware(req,res,next){
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log("Time taken",endTime-startTime);
}
app.use(middleware);
app.get("/user", (req,res)=>{
    let user= {
        name:"Nikhil",
        age:21 
    }
    res.json({
        name:"Nikhil"
    })
})

app.post("/user",(req,res)=>{
    res.json({
        name:"harkirat"
    })
})

app.listen(3000);