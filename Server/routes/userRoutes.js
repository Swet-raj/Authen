import express from 'express'
import userAuth from './../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter.get('/data',userAuth, getUserData)

