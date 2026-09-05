const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});
const app = require('./src/app.js');
const connectDB = require('./src/Db/db.js');

connectDB();

app.listen(3000,()=>{
    console.log("Server is runnning on Port 3000")
})