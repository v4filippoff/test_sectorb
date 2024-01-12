import express from 'express';
import * as userController from '../controllers/userController.js';
import {validateProfileEdit} from '../validators/index.js';
import {verifyToken, checkUserPermissionToProfile} from '../middlewares/auth.js';
import {uploadPhoto} from '../config/storage.js';

const profileRouter = express.Router();

profileRouter.get('/:id(\\d+)', userController.getProfile);
profileRouter.put('/:id(\\d+)', verifyToken, checkUserPermissionToProfile, uploadPhoto.single('photo'), validateProfileEdit, userController.editProfile);

export default profileRouter;
