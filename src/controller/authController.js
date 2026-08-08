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
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        userId: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {expiresIn: "1d"});


    return res.status(201).json({
        message: "User registered successfully",
      
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

}

export default { register };