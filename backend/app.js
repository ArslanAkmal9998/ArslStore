const express=require("express")
const app=express();
const PORT=9998;
const connectDb=require("./config/connectDb")
const User = require("./models/user.model")
const Contact = require("./models/contact.model")
var bodyParser = require('body-parser')
const adminRoute=require("./routes/index.route")
const cors=require("cors")
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"))
app.use("/",adminRoute)

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})



