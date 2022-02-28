// routes/user.js
// это файл маршрутов

const router = require('express').Router(); // создали роутер
const { createUser, getUserID, getUsers } = require('../controllers/user');

router.get('/users/:id', getUserID);
router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router; // экспортировали роутер
