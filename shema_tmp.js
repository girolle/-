
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
    type: String, // это ObjectId
    required: true, // обязательное поле
  },
  likes: { //  список лайкнувших пост пользователей:
    type: Array, // это массив ObjectId, по умолчанию — пустой массив (поле default);
    required: true, // обязательное поле
  },
  createdAt: { //  дата создания:
    type: Date, // это Date, значение по умолчанию Date.now
    required: true, // обязательное поле
  },
});


// создаём модель и экспортируем её
module.exports = mongoose.model('card', cardSchema);
