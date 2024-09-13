import User from "../models/User.model.js";
import { checkPasswordStrength } from "../services/authServices.js";
import jwt from "jsonwebtoken";
import {jwtDecode} from 'jwt-decode';
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

export const register = async (req, res) => {
    try{
        const {fullName, email, password} = req.body;
        const user= await User.findOne({email});
        if(user){
            return res.status(400).send({message: "Email already exists"});
        }
        const {isValid, messages} = checkPasswordStrength(password);
        if(!isValid){
            return res.status(400).send({message: messages});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });
        const token= jwt.sign({id: newUser._id,role:"user"}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "24h"});
        return res.status(201).send({message: "User registered successfully",token});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
};

export const oauthRegister = async (req, res) => {
    try{
        const {clientId,provider,credential}=req.body;
        const user= await User.findOne({clientId});
        if(user){
            return res.status(400).send({message: "User already exists"});
        }
        const decoded = jwtDecode(credential);
        const newUser = await User.create({
            fullName: decoded.given_name+" "+decoded.family_name,
            email: decoded.email,
            provider,
            clientId,
            profilePicture: decoded.picture,
            emailVerified: true
        });
        const token= jwt.sign({id: newUser._id,role:"user"}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "24h"});
        return res.status(201).send({message: "User registered successfully",token});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try{
       const {email, password} = req.body;
       const user = await User.findOne({email});
        if(!user){
              return res.status(400).send({message: "User not found"});
        }
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({message: "Invalid credentials"});
        }
        const token = jwt.sign({id: user._id,role:"user"}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "24h"});
        return res.status(200).send({message: "Login successful", token});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}

export const oauthlogin = async (req, res) =>{
    try{
        const {clientId} = req.body;
        const user = await User.findOne({clientId});
        if(!user){
            return res.status(400).send({message: "User not found"});
        }
        const token = jwt.sign({id: user._id,role:"user"}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "24h"});
        return res.status(200).send({message: "Login successful", token});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}

export const getUserById = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).send({message: "User not found"});
        }
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}

export const uploadProfilePicture = async (req, res) => {
    try{
       const id= req.user.id;
       const user= await User.findById(id);
       if (user.profilePicture) {
        const oldProfilePicPath = path.resolve(user.profilePicture);
        if (fs.existsSync(oldProfilePicPath)) {
            fs.unlink(oldProfilePicPath, (err) => {
                if (err) {
                    console.error("Error deleting old profile picture:", err);
                }
            });
        }
    }
       user.profilePicture = req.files['profilePicture'][0].path;
       await user.save();
       return res.status(200).send({message: "Profile picture uploaded successfully"});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}

export const uploadResume = async (req, res) => {
    try{
        const id= req.user.id;
        const user= await User.findById(id);  
        if (user.resume!=null) {
            const oldResumePath = path.resolve(user.resume);
            if (fs.existsSync(oldResumePath)) {
                fs.unlink(oldResumePath, (err) => {
                    if (err) {
                        console.error("Error deleting old resume:", err);
                    }
                });
            }
        }  
        user.resume = req.files['resume'][0].path;
        await user.save();
        return res.status(200).send({message: "Resume uploaded successfully"});
    }
    catch(err){
        return res.status(500).send({message: "Internal Server Error"});
    }
}