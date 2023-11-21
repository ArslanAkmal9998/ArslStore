const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        require:true
    },
    email:{
        type:String,
        default:""
    },
    message:{
        type:String,
        default:""
    },
    imageUrl:{
        type:String,
        default:""
    }
},
{timestamps:true}
)

module.exports=mongoose.model("Contact",contactSchema)