const express = require('express');
const app = express();
const port = 3000;

const { createTodo } = require("./types");


app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello ji');
})

app.post("/todo",function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "fix the error first",
        })
        return;
    }
})

app.get("/todos",function(req,res){
    const updatePayload = req.body;
    const parse

})

app.post("/done",function(req,res){
    
})

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})