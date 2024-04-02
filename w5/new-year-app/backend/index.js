const express = require('express');
const app = express();
const port = 3000;

const { createTodo,updateTodo } = require("./types");

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
    

})

app.post("/done",function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"fix the update typo first",
        })
        return;
    }
    
    
})

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})