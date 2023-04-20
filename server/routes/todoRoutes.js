const express = require("express")
const { getTodos, setTodo, updateTodo, deleteTodo } = require("../controllers/todoController")
const router = express.Router()

router.route("/todos").get(getTodos)
router.route("/todos/new").post(setTodo)
router.route("/todos/edit/:id").put(updateTodo)
router.route("/todos/delete/:id").delete(deleteTodo)

module.exports = router