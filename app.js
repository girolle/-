const express = require('express');
const router = require('./router.js'); // импортируем роутер
const mongoose = require('mongoose');
const path = require('path');

const { PORT = 3000 } = process.env;
const app = express();
/*
// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
*/
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router); // запускаем

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
