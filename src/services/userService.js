import bcrypt from 'bcrypt';
import User from '../models/user.js';
import {normalizeSequelizeValidationError} from '../utils/errors.js';
import JWTTokenService from './jwtTokenService.js';

class UserService {
  static async registerUser({firstName, email, password}) {
    try {
      const newUser = await User.create({firstName, email, password});
      return newUser;
    } catch (error) {
      console.log(error);
      error.data = normalizeSequelizeValidationError(error);
      throw error;
    }
  }

  static async loginUser({email, password}) {
    try {
      const user = await User.findOne({where: {email: email}});
      if (!user) {
        throw new Error('Неверный email/пароль');
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new Error('Неверный email/пароль');
      }
      const {accessToken, refreshToken} = JWTTokenService.generateTokenPair({email});
      return {accessToken, refreshToken};
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getProfileById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default UserService;
