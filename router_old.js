const router = require('express').Router(); // создали роутер
const { users } = require('../db.js'); // данные нужны для роутинга, поэтому импортируем их

const User = require('../models/user');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    res.send(`Такого id нет`);
    return;
  }

  const { name, age } = users[id];

  res.send(`Пользователь ${name}, ${age} лет`);
});

router.get('/oll', (req, res) => {
  User.find({})
    .then(users => res.send({ name: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = router; // экспортировали роутер