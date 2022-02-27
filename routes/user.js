// routes/user.js
// это файл маршрутов

const router = require('express').Router(); // создали роутер
const { createUser, findOllUser } = require('../controllers/user');

router.get('/users', findOllUser);
router.post('/users', createUser); 

module.exports = router; // экспортировали роутер
