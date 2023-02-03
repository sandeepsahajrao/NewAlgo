import mongoose from "mongoose";

const SignupSchema=new mongoose.Schema({
    FirstName:{
        type:"String",
        required:true,
        trim:true,
        min:5,
        max:20,  
    },
    LastName:{
        type:"String",
        required:true,
        trim:true,
        min:5,
        max:30,
    },
    UserName:{
        type:"String",
        required:true,
        trim:true,
        min:5,
        unique:true,
        index:true,
        lowercase:true,
    },
    Email:{
        type:"String",
        required:true,
        lowercase:true,
        unique:true,
        
    },
    Password:{
        type:"String",
        required:true,
        min:8    
    },

    crateAt:{
        type:Date,
        default:Date.now()
    },
});
// module.exports=mongoose.model("SignupDbc",SignupSchema)
const SignupDbc=mongoose.model("SignupDbc",SignupSchema);
export default SignupDbc