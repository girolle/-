// routes/user.js
// это файл маршрутов

const router = require('express').Router(); // создали роутер
const { createUser, findOllUser } = require('../controllers/user');

router.get('/oll', findOllUser);
router.post('/user', createUser); 

module.exports = router; // экспортировали роутер
