const mongo = require('mongoose');
const UserSchema = new mongoose.model({
    username:String,
    password:String,
})