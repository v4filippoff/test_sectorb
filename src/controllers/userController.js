import {validationResult, matchedData} from 'express-validator';
import UserService from '../services/userService.js';
import {normalizeExpressValidatorError} from '../utils/errors.js';
import {addObjectFieldsWithNull} from '../utils/objects.js';

export async function registerUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({error: normalizeExpressValidatorError(errors)});
  }

  try {
    const newUser = await UserService.registerUser(matchedData(req));
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({error: error.data || error.message});
  }
}

export async function loginUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({error: normalizeExpressValidatorError(errors)});
  }

  try {
    const jwtToken = await UserService.loginUser(matchedData(req));
    return res.status(200).json(jwtToken);
  } catch (error) {
    return res.status(400).json({error: error.data || error.message});
  }
}

export async function getProfile(req, res) {
  try {
    const user = await UserService.getProfileById(req.params['id']);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).send('Not Found');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

export async function getAllProfiles(req, res) {
  let {page} = req.query;
  page = parseInt(page);
  page = page > 0 ? page : 1;
  try {
    const profiles = await UserService.getPaginatedProfilesByPage(page);
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

export async function editProfile(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({error: normalizeExpressValidatorError(errors)});
  }
  try {
    const validatedData = matchedData(req);
    if (req.file) {
      validatedData.photo = req.file.filename;
    } else if (req.fileValidationError) {
      throw req.fileValidationError;
    }
    addObjectFieldsWithNull(validatedData, UserService.getUserFieldsToNull());
    const updatedProfile = await UserService.editProfile(req.user, validatedData);
    return res.status(200).json(updatedProfile);
  } catch (error) {
    return res.status(400).json({error: error.data || error.message});
  }
}
