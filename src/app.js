import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/index.js";
import "./models/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000

sequelize.sync({ force: false })
  .then(() => {
    console.log('База данных подключена и синхронизирована.');
    app.listen(port, () => {
      console.log(`Сервер запущен на порту ${port}`);
    });
  })
  .catch((err) => {
    console.error('Ошибка при синхронизации базы данных:', err);
  });
