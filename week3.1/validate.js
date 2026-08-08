const z = require('zod');
const express = require('express');
const { appendFile } = require('node:fs');

const validate =(obj)=> {
    const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    })
    return schema.safeParse(obj);
}

const result = validate({
    email:"nikhilsinha@gmail.com",
    password:"j43jfd*3#"
});
app.post("/login",function(req,res){
    const response = validate(req.body)
    if(!response.success){
        res.json({
            msg:"Your inputs are invalid"
        })
        return 
    }
})
console.log(result);