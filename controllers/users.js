// controllers/users.js
// это файл контроллеров

const User = require('../models/user');

module.exports.getUserID = (req, res) => {
  User.findById(req.params.id)//запрос одного
    .then(users => res.send({ name: users.name }))
    //.catch(() => res.status(500).send({ message: 'Произошла ошибка getUser' }));
    .catch((err) => { console.dir(err); res.send({ message: 'Произошла ошибка getUser_id' }) });
};

module.exports.getUsers = (req, res) => {
  User.find({}) //запрос всех
    .then(users => res.send({ users: users }))//
    .catch(() => res.status(500).send({ message: 'Произошла ошибка getUsers' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ name: user.name, about: user.about }))
    //.catch(() => res.status(500).send({ message: 'Произошла ошибка createUser' }));
    //.catch((err) => {console.log(err)});
    .catch((err) => { console.dir(err); res.send({ message: 'Произошла ошибка createUser' }) });
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
    .catch((err) => { console.dir(err); res.status(500).send({ message: 'Произошла ошибка updateProfileUser' }) });
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
    .catch((err) => { console.dir(err); res.status(500).send({ message: 'Произошла ошибка updateAvatarUser' }) });
};
