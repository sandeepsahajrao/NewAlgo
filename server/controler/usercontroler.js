
import SignupDbc from "../modelSchema/signup.js";
// import { json } from "body-parser";
export const signupdata=async(req,res)=>{
   try {
      // this code for avoid repeted rentry in db

      const exit= await SignupDbc.findOne({UserName:req.body.UserName})
      if(exit){
        return  res.status(500).json({message:'user already exit'})
      }
      const data=req.body;
      const NewData=new SignupDbc(data)
      await NewData.save()
      // console.log(data)
      res.status(200).json({message:"user Created Successfully"})

   } catch (error) {
      res.status(500).json({message:error.message})
   }
}


export const logindata=async(req,res)=>{
   try {
      const useremail=req.body.Email;
      const userpassword=req.body.Password;
      let data=await SignupDbc.findOne({Email:useremail,Password:userpassword})
      if(data){
         res.send(data)
      }
      // if (data.Email===useremail) {
      //     res.status(200).json(`${UserName} logged In Successfully`)

      // } else {
      //     res.status(401).json("Login failed")
      // }
   }catch(error){
     res.status(500).json('error',error.message)
   }
}

