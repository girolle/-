// controllers/users.js
// это файл контроллеров

const User = require('../models/user');

module.exports.getUserID = (req, res) => {
  User.findById(req.params.id)//запрос одного
    .then(users => res.send({ name: users.name, about: users.about, avatar: users.avatar, _id: users.id }))
    //.catch(() => res.status(500).send({ message: 'Произошла ошибка getUser' }));
    .catch((err) => { console.dir(err); res.status(404).send({ message: 'Запрашиваемый пользователь не найден' }) });
};

module.exports.getUsers = (req, res) => {
  User.find({}) //запрос всех
    .then(users => res.send({ name: users[0].name, about: users[0].about, avatar: users[0].avatar, _id: users[0].id }))//
    .catch(() => res.status(500).send({ message: 'Ошибка чтения всех пользователей' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ name: user.name, about: user.about }))
    //.catch((err) => {console.log(err)});
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Ошибка создания пользователя' }) });
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
    .then(user => res.send({ name: user.name, about: user.about }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Ошибка редактирования профиля' }) });
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
    .then(user => res.send({ avatar: user.avatar }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Ошибка редактирования аватара' }) });
};
