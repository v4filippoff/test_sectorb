import User from '../models/user.js';

async function addUser(userData) {
  try {
    const newUser = await UserModel.create(userData);
    return newUser;
  } catch (error) {
    throw new Error('Ошибка при добавлении пользователя');
  }
}
