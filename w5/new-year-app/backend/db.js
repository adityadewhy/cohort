const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://adityadewhy:mT6yKRXj8hlAcQe1@cluster0.craon0b.mongodb.net/todos");

const todoScheme = mongoose.Schema({
    title: String,
    desc: String,
    isCompleted: Boolean,
})

const todo = mongoose.model("todos",todoScheme);

module.exports({
    todo,
})
