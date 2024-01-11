function normalizeSequelizeError(error) {
  const normalizedErrors = [];
  for (let i = 0; i < error.errors.length; i++) {
    const {message, type, path, value} = error.errors[i];
    normalizedErrors.push({message, type, path, value});
  }
  return normalizedErrors;
}

function normalizeExpressValidatorError(error) {
  const errors_array = error.array();
  const normalizedErrors = [];
  for (let i = 0; i < errors_array.length; i++) {
    const {msg: message, type, path, value} = errors_array[i];
    normalizedErrors.push({message, type, path, value});
  }
  return normalizedErrors;
}

export {normalizeSequelizeError, normalizeExpressValidatorError};
