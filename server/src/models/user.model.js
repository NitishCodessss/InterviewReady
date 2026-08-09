import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type:  String,
        unique: [true, "Username already taken"],
        required: [true, "Username is required"]
    },

     email: {
        type:  String,
        unique: [true, "Account with this email already exists"],
        required: [true, "Email is required"]
    },

    password:{
        type: String,
        required: [true, "Password is required"]
    }
})

const User = mongoose.model("User", UserSchema);

export default User;