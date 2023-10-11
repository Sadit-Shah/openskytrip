import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    arrivalcity: { type: String, required: true },
    dov: { type: Date, required: true },
    persons: { type: Number, required: true },
    days: { type: Number, required: true },
    remarks: { type: String, required: true },
}, {timestamps: true});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);