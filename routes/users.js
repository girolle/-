// routes/users.js
// это файл маршрутов

const routerUsers = require('express').Router(); // создали роутер
const { createUser, getUserID, getUsers } = require('../controllers/users');

routerUsers.get('/users/:id', getUserID);
routerUsers.get('/users', getUsers);
routerUsers.post('/users', createUser);

module.exports = routerUsers; // экспортировали роутер
