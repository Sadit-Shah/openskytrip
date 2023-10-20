import mongoose from 'mongoose';

const tourItinerarySchema = new mongoose.Schema({
    package_id: { type: String },
    overview: { type: String },
    recomended_itinerary: [{ heading: { type: String }, description: { type: String } }],
    included: [{ type: String }],
    excluded: [{ type: String }],
});

export default mongoose.models.tourItinerary || mongoose.model('tourItinerary', tourItinerarySchema);