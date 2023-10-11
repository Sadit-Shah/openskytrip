import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    package_name: { type: String, required: true },
    cities: { type: String, required: true },
    package_duration: { type: String, required: true },   
});

export default mongoose.models.Packages || mongoose.model('Packages', packageSchema);