const express = require('express');
const zod = require('zod');
const app = express();

app.use(express.json());
const schema = zod.array(zod.number());
/*
{
    email: string =>email
    password : atleast 8 letters
    country: "IN", "US"
}
 */
const schema = zod.object({
    email:zod.string(),
    password: z.string().email(),
    country:z.literal("IN").or(z.literal("US")),
    kidneys:z.array(z.number())
})

app.post("/",function(req,res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    res.send({
        response
    })
});

app.listen(3000);