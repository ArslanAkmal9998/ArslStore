const express=require("express")
const app=express();
const PORT=9998;
const connectDb=require("./config/connectDb")
const User = require("./models/user.model")
const Contact = require("./models/contact.model")
var bodyParser = require('body-parser')
const cors=require("cors")
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"))


app.use("/contact",async (req,res)=>{
    try{
        const payload=req.body;
    const contact=await Contact.create(payload)
    res.json(contact)
    }
    catch(err){
        console.log(err)
    }
    })



app.use("/user",async (req,res)=>{
try{
    const payload=req.body;
const user=await User.create(payload)
res.json(user)
}
catch(err){
    console.log(err)
}
})
app.use("/getQueries",async(req,res)=>{
    try{
    const contacts=await Contact.find();
    res.json(contacts)
    
    }
    catch(err){
        console.log(err);
    }
    })

app.use("/getUsers",async(req,res)=>{
try{
const users=await User.find();
res.json(users)

}
catch(err){
    console.log(err);
}
})
app.use("/getUser/:id",async(req,res)=>{
    try{
    const user=await User.findOne({_id:req.params.id});
    if(!user){
        return res.json({message: "User not found"});
    }
    res.json({message:"User Found Successfuly",user})
    
    }
    catch(err){
        console.log(err);
    }
    })

app.use("/",(req,res)=>{
    res.json({message:"Hello World"})
})





app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})



