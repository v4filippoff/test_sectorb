import express from 'express';
import userController from '../controllers/userController.js';
import {validateRegistration} from '../validators/index.js';

const userRouter = express.Router();

userRouter.post('/register', validateRegistration, userController.registerUser);
userRouter.post('/login', userController.loginUser);

export default userRouter;
