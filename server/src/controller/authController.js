import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import blacklistToken from "../models/blackList.model.js"
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
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token,)


    return res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

}

const login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ 
            message: "All fields are required" 
        });
    }
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).json({ 
            message: "Invalid credentials" 
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({ 
            message: "password is incorrect" 
        });
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {expiresIn: "1d"});  

    res.cookie("token", token,)

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}

const logout = async (req, res) => {
    const token = req.cookies.token

    if(token){
        await blacklistToken.create({token})

    }

    res.clearCookie("token")
    res.status(201).json({
        message: "User logged out "
    })
}

const get_me = async (req, res) => {
        
        if (!req.user || !req.user.id) {
            return res.status(400).json({ message: "User not found or not authenticated" });
        }
        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(404).json({
                message:"User not loggedIn"
            })
        }
            res.status(200).json({
            message: "User's details fetched successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
        }
    })
   

}


export default  { 
    register,
    login, 
    logout,
    get_me
};