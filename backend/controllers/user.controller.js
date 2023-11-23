const User=require('../models/user.model')


// Controller to create a new user
exports.store=async(req,res)=>{
try{
const payload=req.body;
const user=await User.create(payload);
res.json({status:200,success:true,message:"User Created Successfully",user})


}
catch(err){

}

}

// Controller to fetch all users
exports.index=async(req,res)=>{
    try{
    res.json("Users Get")
    }
    catch(err){
    
    }
    
    }

// Controller to fetch single user
exports.get=async(req,res)=>{
    try{
    res.json("Get Single User")
    }
    catch(err){
    
    }
    
    }

// Controller to delete single user
exports.destroy=async(req,res)=>{
    try{
    res.json("Delete Single User")
    }
    catch(err){
    
    }
    
    }


    // Controller to fetch single user
exports.update=async(req,res)=>{
    try{
    res.json("Update Single User")
    }
    catch(err){
    
    }
    
    }

