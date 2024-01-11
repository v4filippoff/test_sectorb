import {body} from 'express-validator';


const firstNameValidator = body('firstName')
    .isLength({min: 1})
    .withMessage('Имя пользователя должно содержать не менее 1 символа');
const emailValidator = body('email')
    .isEmail()
    .withMessage('Введите корректный адрес электронной почты');
const passwordValidator = body('password')
    .isLength({min: 8})
    .withMessage('Пароль должен содержать не менее 8 символов');

const validateRegistration = [
  firstNameValidator,
  emailValidator,
  passwordValidator,
];
const validateLogin = [
  emailValidator,
  passwordValidator,
];

export {validateRegistration, validateLogin};
