import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
console.log("Mongo URL:", process.env.MONGODB_URL);
console.log("SMTP USER:", process.env.SMTP_USER);

import cookieParser from "cookie-parser";
import connectDB from './config/mongodb.js'
import { authRouter } from "./routes/authRoutes.js";

const app=express();
const port=process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({Credentials: true}))

app.get('/',(req,res)=> res.send("API Working"));
app.use('/api/auth', authRouter)

app.listen(port,() => console.log(`Server started on PORT:${port}`));

