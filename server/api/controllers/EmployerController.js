import Employer from "../models/Employer.model.js";
import {checkEmployerEmail,checkPasswordStrength} from "../services/authServices.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try{
        const {userName, email, password} = req.body;
        const Username= await Employer.findOne({where:{userName}});
        if(Username){
            return res.status(400).send({message: "Username already exists"});
        }
        const user=await Employer.findOne({where:{email}});
        if(user){
            return res.status(400).send({message: "Email already exists"});
        }
        const isCompanyEmail = await checkEmployerEmail(email);
        if(!isCompanyEmail){
            return res.status(400).send({message: "Please use your company email to register"});
        }
        const {isValid, messages} = checkPasswordStrength(password);
        if(!isValid){
            return res.status(400).send({message: messages});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createuser = await Employer.create({userName, email, password: hashedPassword});
        const token=jwt.sign({id:createuser.id}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "2d"});
        res.status(201).send({message: "User created successfully", token});
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await Employer.findOne({where:{email}});
        if(!user){
            return res.status(404).send({message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({message: "Invalid credentials"});
        }
        const token = jwt.sign({id: user.id}, process.env.REACT_APP_JWT_SECRET, {expiresIn: "2d"});
        res.status(200).send({message: "Login successful", token});
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

export const createEmployer = async (req, res) => {
    try{
        const {Name, companyName, companyType, designation, phone, address, city, state, zip} = req.body;
        const id=req.user.id;
        const user = await Employer.findOne({where:{id}});
        if(!user){
            return res.status(404).send({message: "User does not exist"});
        }
        await user.update({
            Name,
            companyName,
            companyType,
            designation,
            phone,
            address,
            city,
            state,
            zip
        });
        res.status(201).send({message: "Employer created successfully"});
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

export const getEmployer = async(req,res)=>{
     try{
        const id=req.params.id;
        const user=await Employer.findOne({where:{id}});
        if(!user){
            return res.status(404).send({message: "User does not exist"});
        }
        return res.status(200).send(user);
     }
     catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

export const getEmployers = async(req,res)=>{
    try{
        const user=await Employer.findAll();
        return res.status(200).send(user);
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

export const deleteEmployer = async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await Employer.findOne({where:{id}});
        if(!user){
            return res.status(404).send({message: "User does not exist"});
        }
        await user.destroy();
        return res.status(200).send({message:"Employer Successfully deleted"});
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}
