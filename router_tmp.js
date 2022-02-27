const router = require('express').Router(); // создали роутер
const User = require('../models/user');


router.get('/oll', (req, res) => {
  User.find({})
    .then(users => res.send({ Oll: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ user: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.get('/user_name/:name', (req, res) => {
  User.findOne({ name: req.params.name })//найти первого по имени
    .then(user => res.send({ user: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.get('/user_age/:age', (req, res) => {
  User.find({ age: req.params.age })//найти всех по возрасту
    .then(user => res.send({ find_user: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});
