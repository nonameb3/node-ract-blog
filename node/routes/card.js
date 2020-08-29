const express = require('express');
const router = express.Router();

const { isCardOwner, requireJWT } = require('../middlewares');
const Card = require('../models/card');

router.get('/', (req, res) => {
  Card.find({}, (err, data) => {
    res.json({ data: data });
  });
});

router.post('/add', requireJWT, (req, res) => {
  const { name, status, category, content } = req.body;
  const newCard = {
    name,
    status,
    category,
    content,
    author: { id: req.user.id, name: req.user.username },
  };

  Card.create(newCard, (err, card) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json({ message: 'Success add card', data: card });
    }
  });
});

router.put('/edit/:id', requireJWT, isCardOwner, (req, res) => {
  const { name, status, category, content } = req.body;
  const updateCard = {
    name,
    status,
    category,
    content,
  };

  Card.findByIdAndUpdate(
    req.params.id,
    updateCard,
    { new: true },
    (err, card) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.json({ message: 'Success update card', card: card });
      }
    }
  );
});

router.delete('/delete/:id', requireJWT, isCardOwner, (req, res) => {
  Card.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json({ message: 'Success delete card' });
    }
  });
});

module.exports = router;
