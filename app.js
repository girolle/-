const express = require('express');
const router = require('./routes/user.js'); // импортируем роутер
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb');//mydb

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

app.use((req, res, next) => {
  req.user = {
    _id: '621c5f720253f81c16cb74d6' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});

app.use('/', router); // запускаем

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
