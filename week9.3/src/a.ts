const app = express();


enum ResponseStatus{
    Success = 200,
    NotFound = 411,
    Error = 500
}

app.get("/",(req,res)=>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({})
    }
    res.json({});
} )