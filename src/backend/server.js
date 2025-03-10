import express from "express";
import authRoutes from "./routes/auth.js";

app.use("/api/auth", authRoutes);
