import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./db";
import itemRoutes from "./routes/itemRoutes";
import openaiRoutes from "./routes/openaiRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running" });
});
app.use("/items", itemRoutes);
app.use("/openai", openaiRoutes);

// Error Handling
//
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

// Start Server
//
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
