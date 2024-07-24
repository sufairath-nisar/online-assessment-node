import express from "express";
import dotenv from 'dotenv';

import { addParameters } from "./userController.js";

dotenv.config();
const userRouter = express.Router();

userRouter.post("/add-parameters", addParameters);


export default userRouter;