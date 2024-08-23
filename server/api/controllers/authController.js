import otpGenerator from 'otp-generator';
import Employer from '../models/Employer.model.js';
import sendMail from '../services/sendMail.js';
import Mailgen from 'mailgen';
export function localVariables(req, res, next) {
    req.app.locals = {
        OTP: null,
        otpTimestamp: null,
    }
    next();
}
export async function generateOTP(req, res) {
    req.app.locals.OTP = otpGenerator.generate(6, { specialChars: false, lowerCaseAlphabets: false, upperCaseAlphabets: false });
    req.app.locals.otpTimestamp = Date.now();
    const id=req.user.id;
    const user=await Employer.findOne({where:{id}});
    const email=user.email;
    await sendMailOTP(email,req.app.locals.OTP,req,res);
}

export async function verifyOTP(req, res) {
    const { code } = req.query;
    const id=req.user.id;
    const user=await Employer.findOne({where:{id}});
    const currentTimestamp = Date.now();
    const otpTimestamp = req.app.locals.otpTimestamp;
    const timeDifference = (currentTimestamp - otpTimestamp) / 1000 / 60;
    if (timeDifference > 10) {
        req.app.locals.OTP = null;
        req.app.locals.otpTimestamp = null;
        return res.status(400).send({ error: "OTP has expired" });
    }
    if (parseInt(code) === parseInt(req.app.locals.OTP)) {
        req.app.locals.OTP = null;
        req.app.locals.otpTimestamp = null;
        user.isVerified=true;
        user.save();
        return res.status(200).send({ message: "OTP Verified", });
    }
    return res.status(400).send({ error: "Invalid OTP" });
}

export async function sendMailOTP(email, otp,req,res){
    const year = new Date().getFullYear();
     const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Bista Technologies Inc.',
            link: 'https://bistatechnologies.com/'
        },  
        copyright: `Copyright © ${year} Bista Technologies Inc. All rights reserved.`,
    });

    const emailBody = {
        name: 'Bista Technologies Inc.',
        body: {
            intro: `Your OTP is ${otp}`,
            outro: `Enter this OTP to verify your account`
        }
    };
    const emailTemplate = mailGenerator.generate(emailBody);
    try { 
        const mail=await sendMail(emailTemplate, 'Bista Technologies Inc.',email);
        return res.status(201).send({ code: req.app.locals.OTP,message: 'OTP sent' });
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error",error: error.toString() });
    }
}