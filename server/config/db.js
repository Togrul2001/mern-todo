const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://togrul12345:togrul12345@expresscluster.wefbtks.mongodb.net/mern-todo?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("db connection");
    } catch (error) {
        console.log("db disconnection");
    }
}

module.exports = connectDB