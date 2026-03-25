import Booking from "../models/Booking.js";

//create booking
export const createBooking = async (req, res) => {
    try {
        const { service, date } = req.body;
        console.log("BODY:", req.body);

        const booking = await Booking.create({
            user: req.user.id,
            service,
            date,
        });

        res.status(201).json(booking);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get user bookinga
export const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({user: req.user.id})
        .populate("service");

        res.json(bookings);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};