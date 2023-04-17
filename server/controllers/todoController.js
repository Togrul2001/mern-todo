const Todos = require("../models/Todo");

const getTodos =  async (req,res)=>{
    const todos = await Todos.find({})
    res.json(todos)
}

const setTodo = (req,res) => {
    const todo = new Todos({
        title:req.body.title
    })
    todo.save()
    res.json(todo)
}

const updateTodo = async (req,res)=>{
    const todo = await Todos.findById(req.params.id)

    // todo.complete = !todo.complete
    req.body.title ? todo.title = req.body.title : "" 
    if (req.body.complete || req.body.complete==false) {
        todo.complete = req.body.complete
    }
    todo.save()
    res.json(todo)
}

const deleteTodo = async (req,res)=>{
    const todo = await Todos.findByIdAndDelete(req.params.id)
    res.json(todo)
}

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}