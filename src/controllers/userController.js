import {validationResult} from 'express-validator';
import UserService from '../services/userService.js';
import {normalizeExpressValidatorError} from '../utils/errors.js';

const userController = {

  async registerUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({error: normalizeExpressValidatorError(errors)});
    }

    try {
      const newUser = await UserService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({error: error.data || error.message});
    }
  },

  async loginUser(request, response) {
    response.send('hello');
  },

  async getProfile(request, response) {
    response.send('hello');
  },

  async getAllProfiles(request, response) {
    response.send('hello');
  },

  async editProfile(request, response) {
    response.end('hello');
  },
};

export default userController;
