// controllers/users.js
// это файл контроллеров

const User = require('../models/user');

module.exports.getUserID = (req, res) => {
  User.findById(req.params.id)//запрос одного
    .then(users => res.send({
      about: users.about,
      avatar: users.avatar,
      name: users.name,
      _id: users.id
    }))
    .catch((err) => { console.dir(err); res.status(404).send({ message: 'Пользователь по указанному _id не найден' }) });
};

module.exports.getUsers = (req, res) => {
  User.find({}) //запрос всех
    .then(users => res.send({
      name: users[0].name,
      about: users[0].about,
      avatar: users[0].avatar,
      _id: users[0].id
    }))//
    .catch((err) => { console.dir(err); res.status(500).send({ message: 'Ошибка чтения всех пользователей' }) });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({
      about: user.about,
      avatar: user.avatar,
      name: user.name,
      _id: user.id
    }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные при создании пользователя' }) });
};


module.exports.updateProfileUser = (req, res) => {
  const { name, about } = req.body;
  // обновим имя, найденного по _id пользователя
  User.findByIdAndUpdate(req.user._id, { name: name, about: about },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true // если пользователь не найден, он будет создан
    }
  )
    .then(user => res.send({
      about: user.about,
      avatar: user.avatar,
      name: user.name,
      _id: user.id
    }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные при обновлении профиля' }) });
};

module.exports.updateAvatarUser = (req, res) => {
  const { avatar } = req.body;
  // обновим имя, найденного по _id пользователя
  User.findByIdAndUpdate(req.user._id, { avatar: avatar },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true // если пользователь не найден, он будет создан
    }
  )
    .then(user => res.send({
      about: user.about,
      avatar: user.avatar,
      name: user.name,
      _id: user.id
    }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные при обновлении аватара' }) });
};
