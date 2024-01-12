import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/user.js';
import {normalizeSequelizeValidationError} from '../utils/errors.js';
import JWTTokenService from './jwtTokenService.js';

dotenv.config();

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

  static async getProfileByEmail(userEmail) {
    try {
      const user = await User.findOne({where: {email: userEmail}});
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getPaginatedProfilesByPage(pageNumber) {
    const limit = parseInt(process.env.PAGINATE_LIMIT) || 10;
    const offset = (pageNumber - 1) * limit;
    try {
      const pageProfiles = await User.findAndCountAll({limit: limit, offset: offset, order: [['createdAt', 'ASC']]});
      const {count: totalItems, rows: profiles} = pageProfiles;
      const totalPages = Math.ceil(totalItems / limit);
      return {totalItems, profiles, totalPages, pageNumber};
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async editProfile(user, updateData) {
    try {
      user.set(updateData);
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
      error.data = normalizeSequelizeValidationError(error);
      throw error;
    }
  }

  static getUserFieldsToNull() {
    return ['firstName', 'lastName', 'email', 'gender', 'photo'];
  }
}

export default UserService;
