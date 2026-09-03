const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://Tanmay-2:Z31gScjHnBCaUvc8@backend-dev.tdwsxlj.mongodb.net/Project-1")
    console.log("Connected to DB")
}

module.exports=connectDB;