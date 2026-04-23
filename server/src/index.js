import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db.js";

// console.log("MONGO URI:", process.env.MONGODB_URI);
connectDB();