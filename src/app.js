import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import './models/index.js';
import userRouter from './routes/userRouter.js';
import profileRouter from './routes/profileRouter.js';
import * as userController from './controllers/userController.js';
import {unlessPathApplyMiddleware} from './utils/middlewares.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use('/media', express.static('./src/uploads/photos/'));

app.use(unlessPathApplyMiddleware(express.json(), '/profile/:id(\\d+)'));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.get('/profiles', userController.getAllProfiles);

app.use(function(req, res, next) {
  return res.status(404).send('Not Found');
});

sequelize.sync({force: false})
    .then(() => {
      console.log('База данных подключена и синхронизирована.');
      app.listen(port, () => {
        console.log(`Сервер запущен на порту ${port}`);
      });
    })
    .catch((err) => {
      console.error('Ошибка при синхронизации базы данных:', err);
    });
