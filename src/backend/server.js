import express from "express"; // Import Express
import mongoose from "mongoose"; // Import Mongoose
import cors from "cors"; // Import CORS
import dotenv from "dotenv"; // Import dotenv
import authRoutes from "./routes/auth.js"; // Import authentication routes

// Load environment variables from .env file
dotenv.config();

const app = express(); // Create an Express application

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use authentication routes
app.use("/routes/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000; // Use the PORT from the environment or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
