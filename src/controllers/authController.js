import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try{
        const{name, email, password, role} = req.body;

        //here we check existing user
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({ message: "User alreadt exists"});
        }

        //hash pw
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user 
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        res.status(201).json({
            message: "User registered!",
            user,
        });
    } catch (error){
        res.status(500).json({message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check user
        const user = await User.findOne({ email});
        if(!user) {
            return res.status(400).json({message: "User not found"});

        }
        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Creadentials"});

        }

        // generating token
        const token = jwt.sign(
            {id:user._id, role: user.role},
            "secretkey",
            { expiresIn: "1d"}
        );

        res.status(200).json({
            message: "You have login Successfully",
            token,
            user,
        });
    }  catch (error){
        res.status(500).json({ message: error.message});
    }
};