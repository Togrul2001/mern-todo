const express = require("express")
const { getTodos, setTodo, updateTodo, deleteTodo } = require("../controllers/todoController")
const router = express.Router()

router.route("/").get(getTodos)
router.route("/new").post(setTodo)
router.route("/edit/:id").get(updateTodo)
router.route("/delete/:id").get(deleteTodo)

module.exports = router