const mongoose=require("mongoose")


const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://Arslan:Abc12345@cluster0.znjxcfh.mongodb.net/gametrain")
    console.log("Database connection established");
}

module.exports=connectDb;