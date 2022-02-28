// routes/cards.js
// это файл маршрутов

const routerCards = require('express').Router(); // создали роутер
const { createCard, getCards, deleteCard } = require('../controllers/cards');

routerCards.get('/cards', getCards);
routerCards.post('/cards', createCard);
routerCards.delete('/cards/:id', deleteCard);

module.exports = routerCards; // экспортировали роутер