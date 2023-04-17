const mongoose = require("mongoose")
const { Schema } = mongoose

const TodoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    complete: {
        type:Boolean,
        default: false
    },
    timestamp: {
        type:Date,
        default:Date.now()
    }

})

const Todos = mongoose.model("todos", TodoSchema)

module.exports = Todos