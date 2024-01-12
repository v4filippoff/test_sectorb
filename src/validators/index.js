import {body} from 'express-validator';
import mime from 'mime-types';

const firstNameValidator = body('firstName')
    .isLength({min: 1})
    .withMessage('Имя пользователя должно содержать не менее 1 символа');
const lastNameValidator = body('lastName')
    .optional()
    .isLength({min: 1})
    .withMessage('Фамилия пользователя должно содержать не менее 1 символа');
const emailValidator = body('email')
    .isEmail()
    .withMessage('Введите корректный адрес электронной почты');
const passwordValidator = body('password')
    .isLength({min: 8})
    .withMessage('Пароль должен содержать не менее 8 символов');
const genderValidator = body('gender')
    .optional()
    .isIn(['male', 'female'])
    .withMessage('Поле "gender" должно быть "male" или "female"');

const validateRegistration = [
  firstNameValidator,
  emailValidator,
  passwordValidator,
];
const validateLogin = [
  emailValidator,
  passwordValidator,
];
const validateProfileEdit = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  genderValidator,
];

const photoFileValidator = (req, file, cb) => {
  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const fileExtension = mime.extension(file.mimetype);
  console.log(fileExtension);

  if (!allowedExtensions.includes(fileExtension)) {
    req.fileValidationError = new Error('Недопустимое расширение файла (разрешены jpg, jpeg, png)');
    return cb(null, false, req.fileValidationError);
  }

  const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
  if (file.size > maxSizeInBytes) {
    req.fileValidationError = new Error('Недопустимый размер файла (максимальный размер 10 MB)');
    return cb(null, false, req.fileValidationError);
  }

  cb(null, true);
};

export {validateRegistration, validateLogin, validateProfileEdit, photoFileValidator};
