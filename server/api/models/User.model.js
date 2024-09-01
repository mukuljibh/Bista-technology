import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    phone: { 
        type: String,  
    },
    profilePicture: { 
        type: String 
    }, 
    password: { 
        type: String 
    }, 
    provider: { 
        type: String, 
        enum: ['local', 'google', 'linkedin', 'facebook', 'github'], 
        default: 'local' 
    },
    clientId: { 
        type: String 
    }, 
    resume: { 
        type: String 
    }, 
    bio: { 
        type: String 
    }, 
    skills: { 
        type: [String] 
    }, 
    experience: [
        {
            jobTitle: { type: String },
            company: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String },
        }
    ],
    education: [
        {
            school: { type: String },
            degree: { type: String },
            fieldOfStudy: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
        }
    ], 
    certifications: [
        {
            title: { type: String },
            institution: { type: String },
            issueDate: { type: Date },
            expiryDate: { type: Date },
            credentialID: { type: String },
            credentialURL: { type: String },
        }
    ], 
    socialLinks: [
        {
            platform: { type: String }, 
            url: { type: String }, 
        }
    ], 
    emailVerified: {
        type: Boolean, 
        default: false 
    },
    phoneVerified: {
        type: Boolean, 
        default: false 
    },
    isActive: { 
        type: Boolean, 
        default: true 
    }, 
    dateJoined: { 
        type: Date, 
        default: Date.now 
    },
});

export default mongoose.model("User", UserSchema);
