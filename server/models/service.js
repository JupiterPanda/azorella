import mongoose from "mongoose";
const ServiceSchema = new mongoose.Schema({
    title: {
    type: String, 
    required: true,
    },
    price: {
    type: Number, 
    required: true,
    },
    desc: {
    type: String,
    required: true,
    },
},
{
    timestamps: true,
});

export default mongoose.model('Service', ServiceSchema);