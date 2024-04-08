const express = require('express');
const app = express();
const port = 3000;

const {todo} = require("./db")

const cors = require("cors");



const { createTodo,updateTodo } = require("./types");

app.use(express.json());
app.use(cors({
    origin:"https://localhost:5173",
}));

app.get('/',(req,res)=>{
    res.send('hello ji');
})

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "fix the error first",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        isCompleted: false,
    })

    res.json({
        msg: "todo created",
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos,
    })
    

})

app.post("/done", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"fix the update typo first",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        isCompleted: true,
    })
    
})

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})