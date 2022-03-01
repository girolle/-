// controllers/cards.js
// это файл контроллеров

const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  console.log("owner: " + req.user._id); // _id станет доступен
  const owner = req.user._id;
  const { name, link } = req.body;
  const likes = [];

  Card.create({ name, link, owner, likes })
    .then(card => res.send({ name: card.name }))
    //.catch((err) => {console.log(err)});
    .catch((err) => { console.dir(err); res.status(500).send({ message: 'Произошла ошибка createCard' }) });
};

module.exports.getCards = (req, res) => {
  Card.find({}) //запрос всех
    .then(cards => res.send({ cards: cards }))//
    .catch(() => res.status(500).send({ message: 'Произошла ошибка getCards' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id) //
    .then(card => res.send({ card: card }))//
    .catch(() => res.status(500).send({ message: 'Произошла ошибка deleteCard' }));
};



module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
  .then(card => res.send({ card: card }))//
  .catch(() => res.status(500).send({ message: 'Произошла ошибка likeCard' }));
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
  .then(card => res.send({ card: card }))//
  .catch(() => res.status(500).send({ message: 'Произошла ошибка dislikeCard' }));
};