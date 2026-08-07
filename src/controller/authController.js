import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
/**
 * @name register
 * @description Register a new user 
 * @access Public
 */

const register = async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        return res.status(400).json({ 
            message: "All fields are required" 
        });
    }

    const userExists = await User.findOne({ email });
    if(userExists){
        return res.status(400).json({ 
            message: "Account with this email already exists" 
        });
    }


    // Create new user
    const user = await User.create({
        username,
        email,
        password
    });

    return res.status(201).json({
        message: "User registered successfully",
        user
    });
}

export default { register };