const express = require('express');
const { todo } = require('./db');
const app = express();
const cors = require('cors')
const {CreateTodo,UpdateTodo} = require('./types')
app.use(express.json());
app.use(cors())
app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = CreateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})
res.json({
    msg:"Todo created"
})
})


app.get('/todos',async (req,res)=>{
   const response = await todo.find({})
   res.json(response)
}) 
 
app.put('/completed',async (req,res)=>{
    const UpdatePayload = req.body;
    const parsedpayload = UpdateTodo.safeParse(UpdatePayload);
    if(!parsedpayload.success){
        return res.status(411).json({
            message:"You sent the wrong input"
        })
    }
    await todo.updateOne({
        title:req.body.title
    },{
        completed:true
    }
)
res.json({
    message:"Marks as completed"
})
}) 
app.listen(3000)