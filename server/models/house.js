import mongoose from "mongoose";
const HouseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lockDate:{
        type: Object,
        required: true,
        default: [],
    },
    maxNumGuests:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

export default mongoose.model('House', HouseSchema);