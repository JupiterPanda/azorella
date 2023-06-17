import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    houseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'House',
    },
    numGuests: {
        type: Number, 
        required: true,
    },
    services: {
        type: Object,
        required: true,
        default: [],
    },
    arrivalDate: {
        type: Date,
        required: true,

    },
    departureDate: {
        type: Date,
        required: true,
    }
},
{
    timestamps: true,
});

export default mongoose.model('Order', OrderSchema);