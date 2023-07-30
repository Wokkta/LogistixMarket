const compression = require('compression');
const express = require('express');
const app = express();

// Использование сжатия данных
app.use(compression());

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен');
});
