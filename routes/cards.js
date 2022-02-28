// routes/cards.js
// это файл маршрутов

const routerCards = require('express').Router(); // создали роутер
const { createCard, getCards } = require('../controllers/cards');

routerCards.get('/cards', getCards);
routerCards.post('/cards', createCard);

module.exports = routerCards; // экспортировали роутер