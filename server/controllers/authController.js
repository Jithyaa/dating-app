import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


export const signup = async (req,res) =>{
    try {
        const {name,email} = req.body;
        const Email =await User.findOne({email});
        if(Email){
            return res.status(400).json({error:"User already exist"});
        }

        const newUser = new User({
            name,
            email
        })
    if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();

        res.status(200).json({
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
        });
    }else{
        res.status(400).json({error:"Invalid user data"});
    }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req,res) =>{
    try {
        const {email} = req.body
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({error:"Invalid user"});
        }

        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            email:user.email,
        })
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const logout = async (req,res) =>{
    try {
        res.cookie('jwt',"",{maxAge:0});
        res.status(200).json({message:"logged out successfully"});
        
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}