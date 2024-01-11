import express from 'express';
import * as userController from '../controllers/userController.js';
import {validateRegistration, validateLogin} from '../validators/index.js';

const userRouter = express.Router();

userRouter.post('/register', validateRegistration, userController.registerUser);
userRouter.post('/login', validateLogin, userController.loginUser);

export default userRouter;
