const express = require("express")
const { getTodos, setTodo, updateTodo, deleteTodo } = require("../controllers/todoController")
const router = express.Router()

router.route("/todos").get(getTodos)
router.route("/todos/new").post(setTodo)
router.route("/todos/edit/:id").get(updateTodo)
router.route("/todos/delete/:id").get(deleteTodo)

module.exports = router