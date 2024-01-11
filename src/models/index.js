import User from './user.js';

const models = {
  User,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});
