import mongoose from "mongoose";
const url='mongodb+srv://sandy:sandy@hiconsolar1.0a0d9nn.mongodb.net/HICOUNSELOR?retryWrites=true&w=majority';
// mongodb+srv://sandy:<password>@hiconsolar1.0a0d9nn.mongodb.net/?retryWrites=true&w=majority
mongoose.set('strictQuery', false);
const connectDB =async(db_username,db_password)=>{
    // const url=`mongodb+srv://${db_username}:${db_password}@hiconsolar1.0a0d9nn.mongodb.net/HICOUNSELOR?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("coonection DB successfully")
    } catch (error) {
        console.log(error)
    }

}
export default connectDB