const express = require('express');
const router = express.Router();

const middleware = require('../middlewares');
const Card = require('../models/card');

router.get('/', (req, res) => {
  Card.find({}, (err, data) => {
    res.json({ data: data });
  });
});

router.post('/add', middleware.requireJWT, (req, res) => {
  const { name, status, category, content } = req.body;
  const newCard = {
    name,
    status,
    category,
    content,
    author: req.user.id,
  };

  Card.create(newCard, (err, card) => {
    if (err) {
      res.statusCode(500).json({ message: err.message });
    } else {
      res.json({ message: 'Success add card', data: card });
    }
  });
});

module.exports = router;
