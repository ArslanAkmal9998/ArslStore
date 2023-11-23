const Contact=require('../models/contact.model')


// Controller to create a new Contact
exports.store=async(req,res)=>{
try{
const payload=req.body;
const contact=await Contact.create(payload);
res.json({status:200,success:true,message:"Contact Created Successfully",contact})


}
catch(err){
console.log(err)
}

}

// Controller to fetch all users
exports.index=async(req,res)=>{
    try{
  const contacts=await Contact.find();
  res.json({status:200,success:true,message:"Contacts Found Successfully",contacts})
    }
    catch(err){
    console.log(err)
    }
    
    }

// Controller to fetch single user
exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const contact=await Contact.findOne({_id:id})
        if(!contact){
            return  res.json("No contact found")
        }
  res.json({status:200,success:true,message:"Contact Found Successfully",contact})

    }
    catch(err){
    
    }
    
    }

// Controller to delete single user
exports.destroy=async(req,res)=>{
    try{
        const {id}=req.params;
        const contact=await Contact.findOneAndDelete({_id:id})
        if(!contact){
            return res.json({status:400,success:false,message:"Contact Not Found"})
        }
        res.json({status:200,success:true,message:"Contact Deleted Successfully"})
    }
    catch(err){
    console.log(err)
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

