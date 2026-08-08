const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/me' ,(req,res)=>{
    
    res.json({
        Name:"Nikhil Sinha",
        age:21,
        college:"iiit"
    })
});

app.post('/conversation', (req, res) => {
   // console.log(req.headers)
   console.log(req.body)
  res.send('this is the post request i created');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
 