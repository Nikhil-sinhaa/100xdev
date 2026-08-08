const express = require('express');
const jwt = require('jsonwebtoken');

const USER_ALL = [
    {
        "username":"Nikhil",
        "password": "pass"
    },
    {
        "username":"Nirbhay",
        "password": "pass2"
    },
    {
        "username":"Alphana",
        "password": "pass3"
    },
    {
        "username":"Shreeja",
        "password": "pass4"
    },
]
function validuser(){

}
const app = express();
app.post('/signin',(req,res)=>{
    const UserName = req.body.username;
    const Password = req.body.password;

    if(!validuser(UserName,Password)){
       return res.status(403).json({
        msg:"Invalid credential"
       })
    }
    var token = jwt.sign({UserName:UserName},"shhh");

    return res.json({
        token,
    });

});