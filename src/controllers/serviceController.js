import Service from "../models/Service.js";

//creating service
export const createService = async (req, res) => {
    try {
        const service = await Service.create({
            ...req.body,
            provider: req.user.id,
        });

        res.status(201).json(service);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

// get all services
export const getServices = async (req, res) => {
    try {
        const services = await Service.find().populate("provider", " name email");
        res.json(services);
    } catch(error) {
        res.status(500).json({ message: error.message});
    }
};