// models/user.js
// это файл моделей

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
  }
});


const cardSchema = new mongoose.Schema({
  name: { // имя карточки:
    type: String, // это строка
    required: true, // обязательное поле
    minlength: 2, // минимальная длина — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  link: { //  ссылка на картинку:
    type: String, // это строка
    required: true, // обязательное поле
  },
  owner: { //  ссылка на модель автора карточки:
    type: mongoose.Types.ObjectId, //String, // это ObjectId
    required: true, // обязательное поле
  },
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  ],
  createdAt: { //  дата создания:
    type: Date, // это Date, значение по умолчанию Date.now
    required: true, // обязательное поле
  },
});


// создаём модель и экспортируем её
module.exports = mongoose.model('card', cardSchema);

module.exports = mongoose.model('user', userSchema);
