import {DataTypes} from 'sequelize';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import sequelize from '../config/database.js';

dotenv.config();

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: true,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
  hooks: {
    beforeCreate: async (user, options) => {
      const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS) || 10;
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
    },
  },
});
User.prototype.toJSON = function() {
  const values = {...this.get()};
  delete values.password;
  return values;
};

export default User;
