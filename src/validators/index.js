import {body} from 'express-validator';

const validateRegistration = [
  body('firstName')
      .isLength({min: 1})
      .withMessage('Имя пользователя должно содержать не менее 1 символа'),
  body('email')
      .isEmail()
      .withMessage('Введите корректный адрес электронной почты'),
  body('password')
      .isLength({min: 8})
      .withMessage('Пароль должен содержать не менее 8 символов'),
];

export {validateRegistration};
