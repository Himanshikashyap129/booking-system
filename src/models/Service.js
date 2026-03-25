import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
     price: {
        type: Number,
        required: true,
     },
     duration: {
        type: Number,   
        required: true,
     },
}, { timestamps: true});

export default mongoose.model("Service", serviceSchema);