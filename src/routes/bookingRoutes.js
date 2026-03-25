import express from "express";
import { createBooking, getMyBookings } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// only customer can book
router.post("/", protect, authorizeRoles("customer"), createBooking);

// get my bookings
router.get("/my", protect, getMyBookings);

export default router;