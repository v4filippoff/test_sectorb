import {validationResult} from 'express-validator';
import UserService from '../services/userService.js';
import {normalizeExpressValidatorError} from '../utils/errors.js';

export async function registerUser(req, res) {
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
}

export async function loginUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({error: normalizeExpressValidatorError(errors)});
  }

  try {
    const jwtToken = await UserService.loginUser(req.body);
    res.status(200).json(jwtToken);
  } catch (error) {
    res.status(400).json({error: error.data || error.message});
  }
}

export async function getProfile(req, res) {
  try {
    const user = await UserService.getProfileById(req.params['id']);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

export async function getAllProfiles(request, response) {
  response.send('hello');
}

export async function editProfile(request, response) {
  response.end('hello');
}
