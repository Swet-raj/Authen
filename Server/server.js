import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
console.log("Mongo URL:", process.env.MONGODB_URL);
console.log("SMTP USER:", process.env.SMTP_USER);

import cookieParser from "cookie-parser";
import connectDB from './config/mongodb.js'
import { authRouter } from "./routes/authRoutes.js";
import {userRouter} from './routes/userRoutes.js';

const app=express();
const port=process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173', credentials: true}))

app.get('/',(req,res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port,() => console.log(`Server started on PORT:${port}`));

