// controllers/cards.js
// это файл контроллеров

const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  console.log("owner: " + req.user._id); // _id станет доступен
  const owner = req.user._id;
  const { name, link } = req.body;
  const likes = [];

  Card.create({ name, link, owner, likes })
    .then(card => res.send({
      createdAt: card.createdAt,
      likes: card.likes,
      link: card.link,
      name: card.name,
      owner: card.owner,
      _id: card.id
    }))
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные при создании карточки' }) });
};

module.exports.getCards = (req, res) => {
  Card.find({}) //запрос всех
    .then(cards => res.send({ cards }))//
    .catch((err) => { console.dir(err); res.status(500).send({ message: 'Запрашиваемые карточки не найдены' }) });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id) //
    .then(card => res.send({ message: 'Пост удален' }))//
    .catch((err) => { console.dir(err); res.status(404).send({ message: 'Карточка с указанным _id не найдена' }) });
};



module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
  .then(card => res.send({
    createdAt: card.createdAt,
    likes: card.likes,
    link: card.link,
    name: card.name,
    owner: card.owner,
    _id: card.id
  }))//
  .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные для постановки лайка' }) });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
  .then(card => res.send({
    createdAt: card.createdAt,
    likes: card.likes,
    link: card.link,
    name: card.name,
    owner: card.owner,
    _id: card.id
  }))//
  .catch((err) => { console.dir(err); res.status(400).send({ message: 'Переданы некорректные данные для снятии лайка' }) });
};