const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // имя пользователя:
    type: String, // это строка
    required: true, // обязательное поле
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  about: { // информация о пользователе:
    type: String, //  это строка
    required: true, // обязательное поле
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  avatar: { //  ссылка на аватарку:
    type: String, // это строка
    required: true, // обязательное поле
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  }
}); 

// создаём модель и экспортируем её
module.exports = mongoose.model('user', userSchema); 