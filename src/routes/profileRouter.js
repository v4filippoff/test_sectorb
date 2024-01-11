import express from 'express';
import * as userController from '../controllers/userController.js';

const profileRouter = express.Router();

profileRouter.get('/:id(\\d+)', userController.getProfile);
profileRouter.put('/:id(\\d+)', userController.editProfile);

export default profileRouter;
