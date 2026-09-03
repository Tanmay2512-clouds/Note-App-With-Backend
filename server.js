const app = require('./src/app.js');
const connectDB = require('./src/Db/db.js');

connectDB();

app.listen(3000,()=>{
    console.log("Server is runnning on Port 3000")
})