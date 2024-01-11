import User from '../models/user.js';
import {normalizeSequelizeError} from '../utils/errors.js';

class UserService {
  static async registerUser({firstName, email, password}) {
    try {
      const newUser = await User.create({firstName, email, password});
      return newUser;
    } catch (error) {
      console.log(error);
      error.data = normalizeSequelizeError(error);
      throw error;
    }
  }
}

export default UserService;
