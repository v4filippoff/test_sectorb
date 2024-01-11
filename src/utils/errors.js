function normalizeSequelizeValidationError(error) {
  if (!error.errors) {
    return error.message;
  }
  const normalizedErrors = [];
  for (let i = 0; i < error.errors.length; i++) {
    const {message, type, path, value} = error.errors[i];
    normalizedErrors.push({message, type, path, value});
  }
  return normalizedErrors;
}

function normalizeExpressValidatorError(error) {
  const errorsArray = error.array();
  const normalizedErrors = [];
  for (let i = 0; i < errorsArray.length; i++) {
    const {msg: message, type, path, value} = errorsArray[i];
    normalizedErrors.push({message, type, path, value});
  }
  return normalizedErrors;
}

export {normalizeSequelizeValidationError, normalizeExpressValidatorError};
