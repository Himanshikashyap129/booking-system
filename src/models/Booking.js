import mongoose, { mongo } from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
     service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
     },
     date: {
        type: Date,
        required: true,
     },

}, { timestamps: true});

export default mongoose.model("Booking", bookingSchema);