import mongoose from 'mongoose';

const EmployerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    Name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    },
    companyType: {
        type: String,
    },
    designation: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true 
});

const Employer = mongoose.model('Employer', EmployerSchema);

export default Employer;
