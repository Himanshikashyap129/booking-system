import express from "express";
import { createService, getServices } from "../controllers/serviceController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// only provider can create
router.post("/", protect, authorizeRoles("provider"), createService);

//anyone can see services
router.get("/", getServices);

export default router;