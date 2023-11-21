const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        require:true
    },
    email:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:""
    }
},
{timestamps:true}
)

module.exports=mongoose.model("User",userSchema)