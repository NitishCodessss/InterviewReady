import mongoose from "mongoose";

const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to database successfully");
    }catch(err){
        console.error("Error connecting to database:", err);
    }
}

export default connectToDB;