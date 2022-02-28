// routes/cards.js
// это файл маршрутов

const rout = require('express').Router(); // создали роутер
const { createCard, getCards } = require('../controllers/cards');

rout.get('/cards', getCards);
rout.post('/cards', createCard);

module.exports = rout; // экспортировали роутер