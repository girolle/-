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
    //.catch((err) => {console.log(err)});
    .catch((err) => { console.dir(err); res.status(400).send({ message: 'Ошибка создания карточки' }) });
};

module.exports.getCards = (req, res) => {
  Card.find({}) //запрос всех
    .then(cards => res.send({ cards }))//
    .catch(() => res.status(404).send({ message: 'Ошибка - карточки не найдены' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id) //
    .then(card => res.send({ message: 'Пост удален' }))//
    .catch(() => res.status(500).send({ message: 'Ошибка удаления карточки' }));
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
  .catch(() => res.status(500).send({ message: 'Ошибка при лайке карточки' }));
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
  .catch(() => res.status(500).send({ message: 'Ошибка снятия лайка карточки' }));
};