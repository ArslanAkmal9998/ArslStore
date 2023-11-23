const express=require("express")
const router=express.Router();
const contactRoute=require("./contact.route")
const userRoute=require("./user.route")


console.log("Heloo")
router.use("/users",userRoute);
router.use("/contact",contactRoute);





module.exports=router;