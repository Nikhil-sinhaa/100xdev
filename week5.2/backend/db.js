const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xhm90760_db_user:0PRUmgQYPJgUBOWz@cluster0.bhfp1er.mongodb.net/todo')

const todoschema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoschema);

module.exports = {
    todo
}