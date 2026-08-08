const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://xhm90760_db_user:0PRUmgQYPJgUBOWz@cluster0.bhfp1er.mongodb.net/');

// await User.create(
//     {
//         name,email : username, password
//     }
// )


const User = mongoose.model(
    'Users',
    {
        name:String,
        email:String,
        password:String
    }
);
app.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existinguser = await User.findOne(
        {
            email:username
        }
    );
    if(existinguser){
        return res.status(400).send("User already exist")
    }
    const user = new User(
    {
        name:name,
        email:username,
        password:password,
    });
    user.save();
    res.json(
    {
        "msg":"User created succesfully"
    }
)
})



app.listen(3000);