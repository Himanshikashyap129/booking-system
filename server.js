import authRoutes from "./src/routes/authRoutes.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { protect } from "./src/middlewares/authMiddleware.js";
import { authorizeRoles } from "./src/middlewares/roleMiddleware.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";
import bookingRoutes from './src/routes/bookingRoutes.js';


dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);

// route
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/bookings", bookingRoutes);

// mongo connection 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/test", protect, (req, res) => { res.json({
  message: "Protected route working",
  user: req.user,
});

});

// only admin 
app.get("/api/admin", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// only provider 
app.get("/api/provider", protect, authorizeRoles("provider"), (req, res) => {
  res.json({ message: "Welcome Provider" });
});