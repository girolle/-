// controllers/user.js
// это файл контроллеров

const User = require('../models/user');

module.exports.findOllUser = (req, res) => {
    User.find({})
      .then(users => res.send({ Oll: users }))
      .catch(() => res.status(500).send({ message: 'Произошла ошибка findOllUser' }));
  };
  

module.exports.createUser = (req, res) => {
    const { name, age } = req.body;

    User.create({ name, age })
        .then(user => res.send({ name: user.name, age: user.age }))
        .catch(() => res.status(500).send({ message: 'Произошла ошибка createUser' }));
}; 