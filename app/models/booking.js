import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    arrivalcity: { type: String, required: true },
    dov: { type: Date, required: true },
    persons: { type: Number, required: true },
    days: { type: Number, required: true },
    remarks: { type: String},
}, {timestamps: true});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);